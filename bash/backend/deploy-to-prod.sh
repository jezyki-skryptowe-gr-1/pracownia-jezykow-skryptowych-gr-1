#!/usr/bin/env bash
set -euo pipefail

# Triggers a deployment of the backend static site on Render (DEV)
# Requires env var RENDER_BACKEND_PROD_HOOK (a Deploy Hook URL from Render)

if [[ -z "${RENDER_BACKEND_PROD_HOOK:-}" ]]; then
  echo "RENDER_BACKEND_PROD_HOOK is not set" >&2
  exit 1
fi

curl -fsS -X POST "$RENDER_BACKEND_PROD_HOOK"
echo "Triggered backend PROD deploy on Render"
