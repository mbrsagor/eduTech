# Set the default image name
IMAGE_NAME = django_project

# Build the docker image
build:
	docker-compose build

# Start the containers (detached mode)
up:
	docker-compose up -d

# Shut down the containers
down:
	docker-compose down

# Run migrations
migrate:
	docker-compose run web python manage.py migrate

# Create a superuser (make sure to set up environment variables for the admin user)
createsuperuser:
	docker-compose run web python manage.py createsuperuser

# Stop containers
stop:
	docker-compose stop

# Restart containers
restart:
	docker-compose restart

