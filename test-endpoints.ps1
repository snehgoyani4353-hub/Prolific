$urls = @(
  'http://localhost:3000/login.html',
  'http://localhost:3000/dashboard.html',
  'http://localhost:3000/manager-dashboard.html',
  'http://localhost:3000/employee-dashboard.html',
  'http://localhost:3000/komal.html',
  'http://localhost:3000/mansi.html',
  'http://localhost:3000/nikita.html',
  'http://localhost:3000/nistha.html',
  'http://localhost:3000/pooja-jariwala.html',
  'http://localhost:3000/pooja-shah.html',
  'http://localhost:3000/divy.html',
  'http://localhost:3000/preet.html',
  'http://localhost:3000/dhruvit.html',
  'http://localhost:3000/savan.html',
  'http://localhost:3000/hitesh.html',
  'http://localhost:3000/harsh.html',
  'http://localhost:3000/jenish-soni.html',
  'http://localhost:3000/subham.html',
  'http://localhost:3000/yogesh.html',
  'http://localhost:3000/jitendra-bhai.html',
  'http://localhost:3000/bharat-bhai.html',
  'http://localhost:3000/editor-dashboard.html',
  'http://localhost:3000/rakesh.html'
)

$passed = 0
$failed = 0

foreach ($u in $urls) {
  try {
    $res = Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 5
    if ($res.StatusCode -eq 200 -and $res.Content.Length -gt 1000) {
      Write-Host "✅ [200 OK] $u ($($res.Content.Length) bytes)" -ForegroundColor Green
      $passed++
    } else {
      Write-Host "⚠️ [STATUS $($res.StatusCode)] $u" -ForegroundColor Yellow
      $failed++
    }
  } catch {
    Write-Host "❌ [FAILED] $u : $_" -ForegroundColor Red
    $failed++
  }
}

Write-Host "`nSummary: $passed passed, $failed failed"
