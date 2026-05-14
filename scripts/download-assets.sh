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

  # Download platform archives (tar.gz)
  for platform_key in $(echo "$stable_json" | jq -r '.platforms | keys[]'); do
    url=$(echo "$stable_json" | jq -r ".platforms[\"$platform_key\"].url")
    file_name="${url##*/}"
    target_file="$dest_dir/$file_name"

    if [ -f "$target_file" ]; then
      echo "  [skip] $file_name (already exists)"
    else
      echo "  [download] $file_name"
      curl -fSL "$url" -o "$target_file"
    fi
  done

  # Download additional assets (dmg, etc.)
  for os_key in $(echo "$stable_json" | jq -r '.downloads // {} | keys[]'); do
    for arch_key in $(echo "$stable_json" | jq -r ".downloads[\"$os_key\"] | keys[]"); do
      url=$(echo "$stable_json" | jq -r ".downloads[\"$os_key\"][\"$arch_key\"].url")
      file_name="${url##*/}"
      target_file="$dest_dir/$file_name"

      if [ -f "$target_file" ]; then
        echo "  [skip] $file_name (already exists)"
      else
        echo "  [download] $file_name"
        curl -fSL "$url" -o "$target_file"
      fi
    done
  done

  echo "  Done: $slug"
done

echo ""
echo "==> All assets downloaded to public/releases/"
