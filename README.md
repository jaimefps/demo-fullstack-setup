# Demo fullstack setup

Small repo to introduce Nexus, Prisma, code-gen and full-stack type-safety.

### Local development

Start with local server:

```
$ cd server && yarn install && yarn db:migrate && yarn start

```

Once local server is live, run client dev server on a separate terminal:

```
$ cd client && yarn install && yarn dev
```

Whenever you make changes to the server gql types, the client needs to resync:

```
$ cd client && yarn codegen
```
