#!/bin/sh

echo "🔄 Waiting for the database..."
# Optional sleep or postgres check
# sleep 5

echo "🔧 Applying user app migrations..."
python manage.py makemigrations user
python manage.py migrate

echo "🧼 Collecting static files..."
python manage.py collectstatic --noinput

# If you want to ensure superuser exists, you could add a script here

echo "🚀 Starting server..."
exec "$@"

