$edgeCandidates = @(
    "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    "C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    "C:\Program Files\Google\Chrome\Application\chrome.exe",
    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
)

$browserExe = $null
foreach ($cand in $edgeCandidates) {
    if (Test-Path $cand) {
        $browserExe = $cand
        break
    }
}

if (-not $browserExe) {
    Write-Error "No suitable browser engine found for PDF generation."
    exit 1
}

$inputHtml = "file:///d:/Prolific/credentials_directory.html"
$outputPdf = "d:\Prolific\Prolific_Workforce_Credentials.pdf"

$args = @(
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--print-to-pdf=$outputPdf",
    $inputHtml
)

Write-Host "Running PDF generation via $browserExe ..."
$process = Start-Process -FilePath $browserExe -ArgumentList $args -PassThru -Wait

if (Test-Path $outputPdf) {
    $pdfItem = Get-Item $outputPdf
    Write-Host "PDF successfully created: $($pdfItem.FullName) ($($pdfItem.Length) bytes)"
} else {
    Write-Error "Failed to generate PDF."
    exit 1
}
