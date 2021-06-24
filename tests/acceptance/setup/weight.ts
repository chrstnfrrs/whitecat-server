import * as CONSTANTS from '../constants/weight';

import { prisma } from './client';

const setupWeights = async (): Promise<void> => {
  const data = CONSTANTS.WEIGHTS;

  // Create users for acceptance tests
  await prisma.user.createMany({ data: CONSTANTS.WEIGHT_USERS });
  // Create weights for acceptance tests
  await prisma.weight.createMany({ data });

  console.log('Inserted fresh weights.');
};

export { setupWeights };
