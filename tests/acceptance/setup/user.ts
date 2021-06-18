import { USERS } from '../constants/user';

import { prisma } from './client';

const setupUsers = async (): Promise<void> => {
  const data = USERS;

  // Create users for acceptance tests
  await prisma.user.createMany({ data });

  console.log('Inserted fresh users.');
};

export { setupUsers };
