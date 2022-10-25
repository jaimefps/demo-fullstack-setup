import { authenticate, dangerous_authenticateDev } from "./auth/middleware"
import { ApolloServer, AuthenticationError } from "apollo-server"
import { Context } from "./context"
import { schema } from "./schema"
require("dotenv").config()

const server = new ApolloServer({
  schema,
  cors: true,
  async context({ req, res }) {
    try {
      const memberInfo =
        process.env.NODE_ENV === "development"
          ? ((await dangerous_authenticateDev(req)) as MemberInfo)
          : await authenticate(req)

      if (memberInfo) {
        // if (memberInfo.memberDb.blocked) {
        //   throw new ForbiddenError("Member blocked from application")
        // }
        return new Context(memberInfo)
      }
      throw new AuthenticationError("Failed to authenticate")
    } catch (e) {
      console.error(e)
      res.status(500).send()
    }
  },
})

server.listen().then(({ url }) => {
  console.log(`Prisma: npx prisma studio`)
  console.log(`Apollo: https://studio.apollographql.com/sandbox/explorer`)
  console.log(`🟢 Server: ${url}`)
})
