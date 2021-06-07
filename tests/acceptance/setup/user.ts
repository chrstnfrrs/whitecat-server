import Prisma from '@prisma/client';

import { USERS } from '../constants/user';

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

const setupUsers = async (): Promise<void> => {
  const data = USERS;

  // eslint-disable-next-line no-console
  console.log('Clearing user data.');

  const deletedUsers = await prisma.user.deleteMany({});

  // eslint-disable-next-line no-console
  console.log('Cleared:', deletedUsers);

  await prisma.user.createMany({ data });

  // eslint-disable-next-line no-console
  console.log('Inserted fresh users.');
};

export { setupUsers };
