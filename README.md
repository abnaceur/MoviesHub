# HYPERTUBE PROJECT

## Description of the project :

HYPERTUBE is a plateform for video streaming.

## Screenshots

![](https://github.com/abnaceur/MoviesHub/blob/develop/docs/video.gif?raw=true)

![](https://github.com/abnaceur/MoviesHub/blob/develop/docs/Movies1.png?raw=true)

![](https://github.com/abnaceur/MoviesHub/blob/develop/docs/2.png?raw=true)

![](https://github.com/abnaceur/MoviesHub/blob/develop/docs/3.png?raw=true)


## Team
- Abnaceur **contact@naceur-abdeljalil.com** 
- akhoucha akhoucha@student.42.fr
- gucalvi gucalvi@student.42.fr
- mbengtss mbengtss@student.42.fr
- yiwang yiwang@student.42.fr

## Project's Goals and objectives

- The project proposes to create a web application that allows users to search
  and watch videos;
- The research engine will present lists of movies according to users' perferred
  filters;
- The player will be directly integrated to the site, and the videos will be
  downloaded through the BitTorrent protocol;
- Whenever a movie is selected to play, it will be downloaded from the server
  and streamed on the web player at the same time;
- Unwatched movies will be erased from the database after 1 month.

## Technologies :

- NodeJs/Express v8.11.4
- ReactJs v16.3.2
- Redux v4.0.0
- MongoDb
- Docker 17.12.1-ce
- Bootstrap 3

## Screenshots

## Git flow

There are two branches:

- Master - origin
- Develop - follow master

The _Master_ branch is used for production. Only the features we know are
perfectly working should be merged on _Master_ The _Dev_ branch is where new
features are developped.

## Git Commit messages guidlines

Commit messages should conform to the following rules:

- Title in capital letters
- The title is separated from the body of the message by one empty line
- A line should not be longer than 80 characters
- The message must focus on the WHY and WHAT, not HOW.

This template can be used for the commit messages:

> COMMIT MESSAGE TITLE
>
> Here, I explain WHAT I did (the improvements I made to the code, what I
> removed from it, etc...) I alos explain WHY I did it.

A template ready for usage is also avaible in the _misc_ floder, at the root of
the repo.

## Install the development environment

Get the source:

```bash
git clone https://github.com/abnaceur/MoviesHub.git
```

Edit your `/etc/hosts` file:

```
127.0.0.1   si.hpt.local
127.0.0.1   app.hpt.local
127.0.0.1   mongo.hptdb.local
```

## Build the project in dev

Navigate to frontend

```bash
cd client
```

Copy the env variables for developement environment

```bash
cp .env-template .env
```

Navigate to server

```bash
cd server
```

Copy the env variables for developement environment

```bash
cp .env-template .env
```

Within the server path creat a new foldder (if it does not exist)

```bash
mkdir uploads
```

Build the project from the root directory

```bash
docker-compose up --build
```

#### Prerequisite :

- NodeJs v8.11.4
- Docker 17.12.1-ce
- Docker compose
- Port 3030 open (inbound/outBound)

#### Nice to know :

    --

#### Setup DB SQL if available

Replace this Ip addresse in your container and restart docker.

Pour generer la bdd les differentes possibilites:

mysql -u hypertube -p hypertube < hypertube.sql

UNIX shell> mysql hypertube < hypertube.sql

The same in Windows command prompt: mysql -p -u hypertube hypertube <
hypertube.sql

PowerShell C:\> cmd.exe /c "mysql -u root -p hypertube < hypertube.sql"

MySQL command line mysql> use hypertube; mysql> source hypertube.sql;

### Help

Stop and remove all containers

```bash
docker stop $(docker ps -a -q)
```

Connect to a container via bash (get the container name you want to connect to
via command `docker ps`)

```bash
docker exec -ti containername bash
```

Execute a command directly in a container without connecting in bash (get the
container name you want to connect to via command `docker ps`)

```bash
docker exec -i containername yourcommand
```

Delete all images

```bash
docker rmi -f $(docker images -q)
```

Show images

```bash
docker images
```

if you face this error message : "Error:
/usr/lib/x86_64-linux-gnu/libstdc++.so.6: version `CXXABI_1.3.9' not found
(required by /usr/src/app/node_modules/bcrypt/lib/binding/bcrypt_lib.node)"

Cause : bcrypt is lib is not compatible. Solution : To avoid this error do the
following

```bash
# Connect to your container backend
docker exec -ti <container-name> bash

# Delete node_modules
rm -rf node_modules

# Re-install the packages
npm install
```

## FAQ

Error : ERROR: could not find an available, non-overlapping IPv4 address pool
among the defaults to assign to the network

Solution : docker network rm
$(docker network ls | grep "bridge" | awk '/ / { print $1 }')

If on starting the containners in production mode you face an error of refused
connection to mongodb container then :

Solution : change the DB_HOST in backend/.env to localhost Restart the
containers.

If the error persiste then fetch the IpAddress of the mongo container

```bash
# Connect to your container backend
docker inspect hpt_mongo_dev  | grep IPAddress | tail -1 | cut -d '"' -f4
```