#!/bin/bash

# 执行 bootstrap 命令
bootstrap_command="node /directus/cli.js bootstrap"
if ! $bootstrap_command; then
  echo "Error: Failed to bootstrap Directus."
  exit 1
fi

schema_file="/directus/snapshots/schema.yml"

# 检测 latest.yml 文件是否存在
if [ -f "$schema_file" ]; then
  # 文件存在，执行 schema apply
  apply_command="node /directus/cli.js schema apply $schema_file --yes"

  if ! $apply_command; then
    echo "Error: Failed to apply schema."
    exit 1
  fi
fi

# 执行 start 命令
start_command="node /directus/cli.js start"
if ! $start_command; then
  echo "Error: Failed to start Directus."
  exit 1
fi
