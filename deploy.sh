#!/bin/bash

# Back Home Brew - Simple Production Deployment Script
# This script sets up the website using a simple Python HTTP server

set -e

PORT=${PORT:-8080}
HOST=${HOST:-0.0.0.0}

echo "🏠 Back Home Brew - Starting Production Server"
echo "📍 Server will be available at: http://localhost:$PORT"
echo "🌐 Network access: http://$HOST:$PORT"
echo ""

# Check if Python is available
if command -v python3 &> /dev/null; then
    echo "✅ Using Python 3"
    python3 -m http.server $PORT --bind $HOST
elif command -v python &> /dev/null; then
    echo "✅ Using Python 2"
    python -m SimpleHTTPServer $PORT
else
    echo "❌ Error: Python is not installed"
    echo "Please install Python to run this server"
    exit 1
fi