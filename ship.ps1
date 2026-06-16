# ============================================================
#  ship.ps1 — commit, push to GitHub, and publish to Netlify
#  in one step for the GIO4X marketing site.
#
#  Usage (from the project folder):
#     .\ship.ps1 "Your commit message"
#     .\ship.ps1                      (prompts for a message)
#     npm run ship -- "Your message"  (via the npm shortcut)
# ============================================================

param(
  [Parameter(Position = 0, ValueFromRemainingArguments = $true)]
  [string[]] $Message
)

$ErrorActionPreference = "Stop"

# Always operate from this script's own folder (the repo root),
# so it works no matter where you run it from.
Set-Location -Path $PSScriptRoot

# --- Commit message ---
$msg = ($Message -join " ").Trim()
if ([string]::IsNullOrWhiteSpace($msg)) {
  $msg = Read-Host "Commit message"
}
if ([string]::IsNullOrWhiteSpace($msg)) {
  Write-Host "No commit message given — aborting." -ForegroundColor Red
  exit 1
}

Write-Host ""
Write-Host "==> 1/4  Staging changes..." -ForegroundColor Cyan
git add -A

# If nothing changed, skip the commit but still allow a redeploy.
git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Host "    Nothing to commit — working tree clean." -ForegroundColor Yellow
} else {
  Write-Host "==> 2/4  Committing..." -ForegroundColor Cyan
  git commit -m $msg
  if ($LASTEXITCODE -ne 0) { Write-Host "Commit failed." -ForegroundColor Red; exit 1 }
}

Write-Host "==> 3/4  Pushing to GitHub (origin main)..." -ForegroundColor Cyan
git push origin main
if ($LASTEXITCODE -ne 0) { Write-Host "Push failed." -ForegroundColor Red; exit 1 }

Write-Host "==> 4/4  Publishing to Netlify (clean build)..." -ForegroundColor Cyan
# Clear the local build cache so Netlify gets a fresh build.
if (Test-Path ".next") { Remove-Item -Recurse -Force ".next" }
npx netlify deploy --build --prod
if ($LASTEXITCODE -ne 0) { Write-Host "Netlify deploy failed." -ForegroundColor Red; exit 1 }

Write-Host ""
Write-Host "Done. Live at https://lustrous-youtiao-52c8ea.netlify.app" -ForegroundColor Green
