import { TaskDataSource } from "./data-sources"
import { prisma } from "./prisma"

export class Context {
  prisma = prisma
  member: MemberInfo

  constructor(member: MemberInfo) {
    this.member = member
  }

  get tasks() {
    return new TaskDataSource(this)
  }
}
