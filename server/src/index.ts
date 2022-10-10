import { ApolloServer } from "apollo-server"
import { Context } from "./context"
import { schema } from "./schema"

const server = new ApolloServer({
  schema,
  cors: true,
  async context({ req, res }) {
    try {
      return new Context()
    } catch (e) {
      console.error(e)
      res.status(500).send()
    }
  },
})

server.listen().then(({ url }) => {
  console.log(`Prisma: npx prisma studio`)
  console.log(`Apollo: https://studio.apollographql.com/sandbox/explorer`)
  console.log(`Server: ${url}`)
})
