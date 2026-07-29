#!/bin/sh
set -eu

repo_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
workspace_dir=$(dirname -- "$repo_dir")
check_script="$workspace_dir/math-bank/scripts/check_qbank_sync.py"

if [ ! -f "$check_script" ]; then
  echo "missing sibling math-bank check script: $check_script" >&2
  exit 1
fi

cd "$workspace_dir"
exec python3 "$check_script"
