import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const tasks = [
    {
      id: 1,
      title: "SeedTask",
      complete: true,
    },
  ]
  const inserts = tasks.map((t) =>
    prisma.task.upsert({
      update: {},
      where: { id: t.id },
      create: t,
    })
  )
  await Promise.all(inserts)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
