import db from '../querybuilder';

const migrations = async (): Promise<void> => {
  const hasTestTable = await db.schema.hasTable('test');
  console.log('in migrations');

  if (!hasTestTable) {
    console.log('creating test table');

    try {
      await db.schema.createTable('test', (table) => {
        table.increments('id');
        table.string('string');
      });
    } catch (error) {
      console.log('table create error', error);
    }

    const asdf = await db.schema.hasTable('test');
    console.log('asdf', asdf);
  }
};

export { migrations };
