# Product Manager
> Micro services type project.

## Setup

### Dependencies

- Python 3.8.5 
- Mysql 8.0.19
- Docker

The following steps will walk you thru installation on a Mac. Linux should be similar.
It's also possible to develop on a Windows machine, but I have not documented the steps.
If you've developed django/react apps on Windows, you should have little problem getting
up and running.

### Installing Geospatial libraries

On Mac
```
$ brew install gdal
$ brew install libgeoip
```

On Debian/Ubuntu Linux
```
$ sudo apt-get install binutils libproj-dev gdal-bin
$ sudo apt-get install mysql-<mysql-version>-mysql-<mysql-version> # example Mysql 8.0.19
```

### Create Database

Create the database by running the following commands in a mysql shell.
First after installation mysql you may the command: example
mysql -u root -p1234

```
create database "newspaper";
```

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'newspaper',
        'USER': 'root',
        'PASSWORD': '12345678',
        'HOST': 'localhost',   # Or an IP Address that your DB is hosted on
        'PORT': '3306',
    }
}
```


### Setup Django Server (Mac)
install [Homebrew](http://brew.sh), then…

```
brew install python3
```
Assuming you've cloned the repository, open Terminal and `cd ~/your/path/to/productManager`.


Activate it:

```bash/zsh
source env/bin/activate
```

Install the python dependancies which includes django and other libraries.

```
pip install -r requirements.txt

python3 manage.py runserver # or
./manage.py runserver
```
