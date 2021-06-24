import { prisma } from './client';

const main = async () => {
  console.log('Clearing weight data.');

  const deletedWeights = await prisma.weight.deleteMany({});

  console.log('Cleared:', deletedWeights);

  console.log('Clearing user data.');

  const deletedUsers = await prisma.user.deleteMany({});

  console.log('Cleared:', deletedUsers);
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit();
};

main();
