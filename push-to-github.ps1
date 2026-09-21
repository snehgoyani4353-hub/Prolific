param(
    [string]$Message = "Update project files"
)

Write-Host "Checking git status..." -ForegroundColor Cyan
git status

Write-Host "`nStaging all changes..." -ForegroundColor Cyan
git add -A

$status = git status --porcelain
if (-not $status) {
    Write-Host "No changes detected to commit." -ForegroundColor Yellow
    exit 0
}

Write-Host "Committing changes with message: '$Message'..." -ForegroundColor Cyan
git commit -m "$Message"

Write-Host "Pushing to GitHub (main)..." -ForegroundColor Cyan
git push origin main

Write-Host "Successfully pushed changes to GitHub!" -ForegroundColor Green
