import {
  booleanArg,
  intArg,
  list,
  mutationField,
  nonNull,
  objectType,
  queryField,
  stringArg,
} from "nexus"

export const TaskType = objectType({
  name: "Task",
  description: "A task that needs to be done",
  definition(t) {
    t.int("id")
    t.string("title")
    t.boolean("complete")
    t.dateTime("createdAt")
    t.dateTime("updatedAt")
  },
})

export const taskQuery = queryField("tasks", {
  type: list(TaskType),
  description: "Get task items",
  args: {
    id: intArg(),
    complete: booleanArg(),
  },
  resolve(root, args, ctx) {
    return ctx.tasks.get({
      id: args.id,
      complete: args.complete,
    })
  },
})

export const createTask = mutationField("createTask", {
  type: "Boolean",
  description: "Create a task item",
  args: {
    title: nonNull(stringArg()),
  },
  async resolve(_, args, ctx) {
    try {
      await ctx.tasks.create({
        title: args.title,
      })
      return true
    } catch (e) {
      return false
    }
  },
})

export const updateTask = mutationField("updateTask", {
  type: "Boolean",
  description: "Update a task item",
  args: {
    id: nonNull(intArg()),
    title: stringArg(),
    complete: booleanArg(),
  },
  async resolve(_, args, ctx) {
    try {
      await ctx.tasks.update({
        id: args.id,
        title: args.title,
        complete: args.complete,
      })
      return true
    } catch (e) {
      return false
    }
  },
})

export const deleteTask = mutationField("deleteTask", {
  type: "Boolean",
  description: "Delete a task item",
  args: {
    id: nonNull(intArg()),
  },
  async resolve(_, args, ctx) {
    try {
      await ctx.tasks.delete({
        id: args.id,
      })
      return true
    } catch (e) {
      return false
    }
  },
})
