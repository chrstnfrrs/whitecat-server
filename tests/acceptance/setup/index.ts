import Prisma from '@prisma/client';

import * as UserData from './user';
import * as WeightData from './weight';

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

const clearTables = async () => {
  console.log('Clearing weight data.');

  const deletedWeights = await prisma.weight.deleteMany({});

  console.log('Cleared:', deletedWeights);

  console.log('Clearing user data.');

  const deletedUsers = await prisma.user.deleteMany({});

  console.log('Cleared:', deletedUsers);
};

const main = async () => {
  await clearTables();
  await UserData.setupUsers();
  await WeightData.setupWeights();

  // eslint-disable-next-line unicorn/no-process-exit
  process.exit();
};

main();
