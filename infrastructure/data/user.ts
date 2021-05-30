import Prisma from '@prisma/client';

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

const createUsers = async (): Promise<void> => {
  const data = [];

  const hasAdmin = await prisma.user.findFirst({
    where: { email: 'admin@test.com' },
  });

  if (!hasAdmin) {
    data.push({
      email: 'admin@test.com',
      firstName: 'Christian',
      lastName: 'Farris',
    });
  }

  // eslint-disable-next-line no-console
  console.log('Inserting data...', data);

  await prisma.user.createMany({ data });

  // eslint-disable-next-line no-console
  console.log('Inserted:', data);
};

export { createUsers };
