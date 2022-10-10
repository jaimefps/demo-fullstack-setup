import { DateTimeResolver } from "graphql-scalars"
import { GraphQLScalarType } from "graphql"
import { asNexusMethod } from "nexus"

// Scalar for compatibility
// between Prisma and Nexus:
export const DateType = asNexusMethod(
  new GraphQLScalarType(DateTimeResolver),
  "dateTime"
)
