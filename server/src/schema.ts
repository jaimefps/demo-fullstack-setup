import { makeSchema } from "nexus"
import * as SchemaTypes from "./schema-types"
import path, { join } from "path"

export const schema = makeSchema({
  outputs: {
    typegen: join(__dirname, "../generated/nexus-typegen.ts"),
    schema: join(__dirname, "../generated/schema.graphql"),
  },
  contextType: {
    module: path.join(__dirname, "./context.ts"),
    export: "Context",
  },
  types: [...Object.values(SchemaTypes)],
})
