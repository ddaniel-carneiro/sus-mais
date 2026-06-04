#!/bin/sh
echo 'Waiting 10 seconds for MySQL initialization...'
sleep 10
echo "Starting Node.js server..."
exec npm start
