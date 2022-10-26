# Demo fullstack setup

Small repo to introduce Nexus, Prisma, code-gen, and fullstack type-safety. Includes example integration with Firebase authentication.

## Start local development

Make sure you've [installed Docker](https://docs.docker.com/get-docker/) on your machine.

From the root of the project, start the Docker container for the dtb:

```
$ docker-compose up -d
```

From the root of the project, this command starts all dev servers in parallel:

```
$ yarn dev
```

Development setup is fully functional when the terminal displays:

```
🟢 Server: http://localhost:4000/
```

The web client can be opened at:

```
➜  Local:   http://127.0.0.1:5173/
```

## Stop local development

Cancel the terminal process started above. Note you will **lose all data** in the dtb if you stop the Docker container; if you wish to do so, run the below command to stop your container.

```
$ docker-compose down
```
