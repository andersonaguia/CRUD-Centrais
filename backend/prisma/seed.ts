import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.model.createMany({
    data: [
      {
        name: 'AMT 4010',
      },
      {
        name: 'AMT 4010 SMART',
      },
      {
        name: 'AMT 2018',
      },
      {
        name: 'AMT 2018 E/EG',
      },
      {
        name: 'AMT 1000',
      },
      {
        name: 'AMT 8000',
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
