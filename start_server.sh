#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install

# Update commands
echo "Updating commands..."
node deploy_commands.js

# Start bot
echo "Starting server..."
node server.js