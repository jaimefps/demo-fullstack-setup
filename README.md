# Demo fullstack setup

Small repo to introduce Nexus, Prisma, code-gen, and fullstack type-safety.

### Local development

Make sure you've [installed Docker](https://docs.docker.com/get-docker/) on your machine.

Start the Docker container for the database:

```
$ docker-compose up -d
```

Start the local Node server:

```
$ cd server && yarn install && yarn migrate && yarn dev
```

Once Node server is live, on a separate terminal run client dev server:

```
$ cd client && yarn install && yarn dev
```

Whenever you make changes to the Node server gql schema, the client needs to resync:

```
$ cd client && yarn codegen
```

### Stop local development

Cancel all running processes started above.

Then stop your Docker container:

```
$ docker-compose down
```
