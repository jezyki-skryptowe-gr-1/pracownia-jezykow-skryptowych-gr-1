#!/bin/bash
set -e

echo "🏃‍♂️ Running database tests…"

pytest backend/tests/users_repository_test.py

echo "✅ Database tests completed successfully"
