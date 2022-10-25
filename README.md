# Demo fullstack setup

Small repo to introduce Nexus, Prisma, code-gen, and fullstack type-safety.

## Start local development

Make sure you've [installed Docker](https://docs.docker.com/get-docker/) on your machine.

Start the Docker container for the database:

```
$ docker-compose up -d
```

From the root of the project, start all dev servers in parallel:

```
$ yarn dev
```

You local client should be up once you see:

```
[dev:client] [dev:server]   VITE v3.1.8  ready in 721 ms
[dev:client] [dev:server]
[dev:client] [dev:server]   ➜  Local:   http://127.0.0.1:5173/
```

Development setup is fully functional once you see:

```
🟢 Server: http://localhost:4000/
```

## Stop local development

Cancel the running processes started above.

Then stop your Docker container:

```
$ docker-compose down
```
