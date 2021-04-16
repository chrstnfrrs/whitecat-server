import db from '../querybuilder';

const helloResolver = async (): Promise<string> => {
  const hasTest = await db.schema.hasTable('test');

  return hasTest.toString();
};

export { helloResolver };
