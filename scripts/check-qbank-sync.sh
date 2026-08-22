#!/bin/sh
set -eu

repo_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
workspace_dir=$(dirname -- "$repo_dir")
pi_math_dir="$workspace_dir/pi-math"
counsel_dir="$workspace_dir/suri-counsel"
export_script="$pi_math_dir/scripts/export_summer_qbank.py"
check_script="$pi_math_dir/scripts/check_qbank_export.py"
counsel_qbank="$counsel_dir/web/public/summer/qbank-data.js"

if [ ! -f "$export_script" ] || [ ! -f "$check_script" ]; then
  echo "missing sibling pi-math qbank scripts" >&2
  exit 1
fi

if [ ! -f "$counsel_qbank" ]; then
  echo "missing counselor summer qbank copy: $counsel_qbank" >&2
  exit 1
fi

cd "$workspace_dir"
python3 "$export_script"
python3 "$check_script" --fixed-point
python3 "$check_script" --candidate "$repo_dir/qbank-data.js"
python3 "$check_script" --candidate "$counsel_qbank"

# The counselor copy must mirror this repo's RUNTIME files file-for-file, in
# both directions:
#   - repo runtime file missing/different in counselor  -> fail (forgot to sync)
#   - counselor file that is not a repo runtime file   -> fail (hand-added junk)
# Excluded from "runtime": SYNC_SOURCE.txt (counselor-only marker), test.js
# (offline regression runner), and the build-time tooling that must never ship
# (scripts/, tools/, exam-src/, templates/), plus repo-only docs/config.
counsel_summer="$counsel_dir/web/public/summer"
if [ ! -d "$counsel_summer" ]; then
  echo "missing counselor summer copy dir: $counsel_summer" >&2
  exit 1
fi

runtime_files() {
  find "$1" -type f \
    ! -name SYNC_SOURCE.txt \
    ! -name test.js \
    ! -path '*/scripts/*' \
    ! -path '*/tools/*' \
    ! -path '*/exam-src/*' \
    ! -path '*/templates/*' \
    ! -name AGENTS.md \
    ! -name CLAUDE.md \
    ! -name README.md \
    ! -name TESTING.md \
    ! -name EXAM_REVIEW_TEMPLATE.md \
    ! -name bun.lock \
    ! -name tsconfig.json \
    ! -name browser-page-audit.cjs \
    ! -path '*/.git/*' \
    | sed "s|^$1/||"
}

repo_list=$(runtime_files "$repo_dir")
counsel_list=$(runtime_files "$counsel_summer")

for rel in $repo_list; do
  if ! cmp -s "$repo_dir/$rel" "$counsel_summer/$rel"; then
    echo "static page drift: counselor copy missing/differs at $rel" >&2
    exit 1
  fi
done

for rel in $counsel_list; do
  if [ ! -f "$repo_dir/$rel" ] || ! cmp -s "$repo_dir/$rel" "$counsel_summer/$rel"; then
    echo "static page drift: counselor has non-runtime file $rel" >&2
    exit 1
  fi
done
