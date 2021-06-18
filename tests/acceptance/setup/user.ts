import Prisma from '@prisma/client';

import { USERS } from '../constants/user';

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

const setupUsers = async (): Promise<void> => {
  const data = USERS;

  // Create users for acceptance tests
  await prisma.user.createMany({ data });

  console.log('Inserted fresh users.');
};

export { setupUsers };
