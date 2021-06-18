import Prisma from '@prisma/client';

import { WEIGHTS } from '../constants/weight';

const { PrismaClient } = Prisma;

const prisma = new PrismaClient();

const setupWeights = async (): Promise<void> => {
  const data = WEIGHTS;

  // Create weights for acceptance tests
  await prisma.weight.createMany({ data });

  console.log('Inserted fresh weights.');
};

export { setupWeights };
