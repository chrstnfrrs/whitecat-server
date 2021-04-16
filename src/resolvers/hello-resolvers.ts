import db from '../querybuilder';

const helloResolver = async (): Promise<string> => {
  let hasTest;

  try {
    hasTest = await db.schema.hasTable('test');
  } catch (error) {
    console.log('error', error);
  }

  return hasTest?.toString() || '';
};

export { helloResolver };
