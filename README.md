# EduTech
> Python popular framework Django machine larning (ML) project for university bloom university at Malaysia.

### Setup

The following steps will walk you through installation on a Mac. Linux should be similar.
It's also possible to develop on a Windows machine, but I have not documented the steps.
If you've developed Django apps on Windows, you should have little problem getting
up and running.

#### Dependencies
###### Prerequisites

- Python 3.12 
- PostgreSQL  16.3
- Docker

Create virtualenv in your system then follow the comments:
```` virtualenv venv --python=python3.12 ````

If you successfully create the virtualenv then activate:
```source venv/bin/activate```

> Then create `.env` file and paste code from the `.env-sample` file and update valid information.

After that, you may run the `requirements.txt` file following the command:
```bash
pip install -r requirements.txt
./manage.py makemigrations user
./manage.py migrate
./manage.py runserver
```

##### If you run the project Docker, please follow the instructions in this self-learning guide.
```base
docker-compose build
docker-compose up
```
