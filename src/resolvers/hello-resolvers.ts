import db from '../querybuilder';

const helloResolver = async (): Promise<string> => {
  const hasUsers = await db.schema.hasTable('users');

  return hasUsers.toString();
};

export { helloResolver };
