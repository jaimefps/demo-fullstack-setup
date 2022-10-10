import { TaskDataSource } from "./data-sources"
import { prisma } from "./prisma"

export class Context {
  prisma = prisma

  get tasks() {
    return new TaskDataSource(this)
  }
}
