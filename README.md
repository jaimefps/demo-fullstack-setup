# Demo fullstack setup

Small repo to introduce Nexus, Prisma, code-gen, and fullstack type-safety.

### Start Local development

Make sure you've [installed Docker](https://docs.docker.com/get-docker/) on your machine.

Start the Docker container for the database:

```
$ docker-compose up -d
```

Run all dev servers in parallel:

```
$ yarn dev
```

### Stop local development

Cancel the running processes started above.

Then stop your Docker container:

```
$ docker-compose down
```
