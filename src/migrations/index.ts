import db from '../querybuilder';

const migrations = async (): Promise<void> => {
  const hasTestTable = await db.schema.hasTable('test');
  console.log('in migrations');

  if (!hasTestTable) {
    console.log('creating test table');

    db.schema.createTable('test', (table) => {
      table.increments('id');
      table.string('string');
    });
  }
};

export { migrations };
