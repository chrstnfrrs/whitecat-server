import Prisma from '@prisma/client';
import Chance from 'chance';

const { PrismaClient } = Prisma;

const chance = new Chance();
const prisma = new PrismaClient();

const createUsers = async (): Promise<void> => {
  const data = [];

  const hasAdmin = await prisma.user.findFirst({
    where: { email: 'user@whitecat.com' },
  });

  if (!hasAdmin) {
    data.push({
      email: 'user@whitecat.com',
      firstName: chance.first(),
      lastName: chance.last(),
    });
  }

  // eslint-disable-next-line no-console
  console.log('Inserting data...', data);

  await prisma.user.createMany({ data });

  // eslint-disable-next-line no-console
  console.log('Inserted:', data);
};

export { createUsers };
