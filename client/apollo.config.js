const path = require("path")

module.exports = {
  client: {
    includes: ["./src/**/*.gql"],
    excludes: ["./generated/**/*"],
    service: {
      name: "client",
      localSchemaFile: path.join(
        __dirname,
        "../server/generated/schema.graphql"
      ),
    },
  },
}
