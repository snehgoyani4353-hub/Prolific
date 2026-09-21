param(
    [int]$Port = 3000,
    [string]$Root = $PSScriptRoot
)

if (-not $Root) {
    $Root = (Get-Location).Path
}

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    Write-Error "Failed to start HTTP server on port $Port : $_"
    exit 1
}

Write-Host "=========================================================="
Write-Host "  PROLIFIC Enterprise Secure Web Server v2.4 (Hardened)"
Write-Host "  URL: http://localhost:$Port/"
Write-Host "  Root Directory: $Root"
Write-Host "  Security: CSP, X-Frame-Options, No-Sniff, Anti-Traversal"
Write-Host "=========================================================="

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".webp" = "image/webp"
    ".dwg"  = "application/octet-stream"
    ".pdf"  = "application/pdf"
}

# Blocked extensions & sensitive server files
$blockedExtensions = @(".ps1", ".env", ".git", ".gitignore", ".bak", ".config", ".bat", ".cmd", ".sh", ".vbs")

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        # 1. Method Filtering (Allow only GET, HEAD, POST, OPTIONS)
        $method = $request.HttpMethod.ToUpper()
        if ($method -notin @("GET", "HEAD", "POST", "OPTIONS")) {
            $response.StatusCode = 405
            $buf = [System.Text.Encoding]::UTF8.GetBytes("405 Method Not Allowed")
            $response.ContentLength64 = $buf.Length
            $response.OutputStream.Write($buf, 0, $buf.Length)
            $response.OutputStream.Close()
            continue
        }

        # 2. Strict Enterprise Security Headers
        $response.AddHeader("X-Content-Type-Options", "nosniff")
        $response.AddHeader("X-Frame-Options", "SAMEORIGIN")
        $response.AddHeader("X-XSS-Protection", "1; mode=block")
        $response.AddHeader("Referrer-Policy", "strict-origin-when-cross-origin")
        $response.AddHeader("Content-Security-Policy", "default-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://*.google.com https://*.googleapis.com https://*.gstatic.com; font-src 'self' https://fonts.gstatic.com; frame-src 'self' https://maps.google.com https://www.google.com https://maps.googleapis.com https://*.google.com; object-src 'none'; frame-ancestors 'self'; connect-src 'self';")
        $response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")
        $response.AddHeader("Pragma", "no-cache")
        $response.AddHeader("Expires", "0")
        $response.AddHeader("Server", "Prolific-Security-Shield/2.4")

        # 3. Path Normalization & Anti-Path Traversal Check
        $rawUrl = $request.Url.LocalPath
        $decodedPath = [System.Uri]::UnescapeDataString($rawUrl).TrimStart('/')
        
        if ([string]::IsNullOrWhiteSpace($decodedPath)) {
            $decodedPath = "index.html"
        }

        # Normalize path
        $decodedPath = $decodedPath -replace '/', '\'
        $filePath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($Root, $decodedPath))

        # Security check: prevent directory traversal outside of root
        if (-not $filePath.StartsWith($Root, [System.StringComparison]::OrdinalIgnoreCase)) {
            $response.StatusCode = 403
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("403 Forbidden: Security Violation")
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            $response.OutputStream.Close()
            Write-Host "[$([System.DateTime]::Now.ToString('HH:mm:ss'))] BLOCKED Traversal Attempt: $rawUrl" -ForegroundColor Red
            continue
        }

        # Security check: block execution / access of sensitive script files
        $fileExt = [System.IO.Path]::GetExtension($filePath).ToLower()
        if ($blockedExtensions -contains $fileExt) {
            $response.StatusCode = 403
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("403 Forbidden: Restricted Resource")
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            $response.OutputStream.Close()
            continue
        }

        if (Test-Path $filePath -PathType Leaf) {
            $contentType = if ($mimeTypes.ContainsKey($fileExt)) { $mimeTypes[$fileExt] } else { "application/octet-stream" }
            $response.ContentType = $contentType
            $response.StatusCode = 200

            if ($method -eq "HEAD") {
                $fileInfo = New-Object System.IO.FileInfo($filePath)
                $response.ContentLength64 = $fileInfo.Length
            } else {
                try {
                    $bytes = [System.IO.File]::ReadAllBytes($filePath)
                    $response.ContentLength64 = $bytes.Length
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                } catch {
                    $response.StatusCode = 500
                }
            }
        } else {
            $response.StatusCode = 404
            $notFoundMsg = "404 Not Found: $decodedPath"
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($notFoundMsg)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }

        $response.OutputStream.Close()
        Write-Host "[$([System.DateTime]::Now.ToString('HH:mm:ss'))] $($request.HttpMethod) $($request.Url.LocalPath) -> $($response.StatusCode)"
    }
} finally {
    $listener.Stop()
    $listener.Close()
    Write-Host "Server stopped."
}
