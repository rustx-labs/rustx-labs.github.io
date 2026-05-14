#!/usr/bin/env bash
set -euo pipefail

# Download installer assets from remote stable.json into public/releases/
# Usage: ./scripts/download-assets.sh [site_url]
#   site_url: e.g. https://rustx-labs.github.io (optional, used for logging)

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
CONFIG_FILE="$ROOT_DIR/config.json"
PUBLIC_DIR="$ROOT_DIR/public"

if ! command -v jq &>/dev/null; then
  echo "Error: jq is required. Install it first."
  exit 1
fi

echo "==> Downloading installer assets..."

for slug in $(jq -r '.softwares | keys[]' "$CONFIG_FILE"); do
  download_url=$(jq -r ".softwares[\"$slug\"].download_url" "$CONFIG_FILE")
  name=$(jq -r ".softwares[\"$slug\"].name" "$CONFIG_FILE")
  dest_dir="$PUBLIC_DIR/releases/$slug"

  echo ""
  echo "--- $name ($slug) ---"
  echo "  Fetching stable.json from: $download_url"

  stable_json=$(curl -fsSL "$download_url")
  version=$(echo "$stable_json" | jq -r '.version')
  echo "  Version: $version"

  mkdir -p "$dest_dir"

  # Download each file
  for row in $(echo "$stable_json" | jq -r '.files[] | @base64'); do
    archive_name=$(echo "$row" | base64 -d | jq -r '.archive_name')
    url=$(echo "$row" | base64 -d | jq -r '.url')
    target_file="$dest_dir/$archive_name"

    if [ -f "$target_file" ]; then
      echo "  [skip] $archive_name (already exists)"
    else
      echo "  [download] $archive_name"
      curl -fSL "$url" -o "$target_file"
    fi
  done

  echo "  Done: $slug"
done

echo ""
echo "==> All assets downloaded to public/releases/"
