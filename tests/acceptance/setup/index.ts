import * as UserData from './user';
import * as WeightData from './weight';

const main = async () => {
  await UserData.setupUsers();
  await WeightData.setupWeights();
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit();
};

main();
