import { Context } from "../context"

export class TaskDataSource {
  constructor(protected ctx: Context) {
    this.ctx = ctx
  }

  get({ id, complete }: { id: un<number>; complete: un<boolean> }) {
    return this.ctx.prisma.task.findMany({
      where: {
        ...(typeof id === "number" && { id }),
        ...(typeof complete === "boolean" && { complete }),
      },
    })
  }

  create({ title }: { title: string }) {
    return this.ctx.prisma.task.create({
      data: { title },
    })
  }

  update({
    id,
    title,
    complete,
  }: {
    id: number
    title: un<string>
    complete: un<boolean>
  }) {
    return this.ctx.prisma.task.update({
      where: { id },
      data: {
        ...(typeof title === "string" && { title }),
        ...(typeof complete === "boolean" && { complete }),
      },
    })
  }

  delete({ id }: { id: number }) {
    return this.ctx.prisma.task.delete({
      where: { id },
    })
  }
}
