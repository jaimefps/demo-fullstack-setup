import { objectType, queryField } from "nexus"

const world = {
  message: "HelloWorld",
  hidden: "hidden",
}

export const HelloWorldType = objectType({
  name: "HelloWorld",
  definition(t) {
    t.string("message")
  },
})

export const helloWorldQuery = queryField("helloWorld", {
  type: HelloWorldType,
  resolve() {
    return world
  },
})
