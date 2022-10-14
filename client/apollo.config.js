const path = require("path")

module.exports = {
  client: {
    includes: ["./src/**/*.gql"],
    service: {
      name: "client",
      localSchemaFile: path.join(
        __dirname,
        "../server/generated/schema.graphql"
      ),
    },
  },
}
