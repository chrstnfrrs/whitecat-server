import db from '../querybuilder';

const migrations = async () => {
  const hasTestTable = await db.schema.hasTable('test');

  if (!hasTestTable) {
    db.schema.createTable('test', (table) => {
      table.increments('id');
      table.string('string');
    });
  }
};

export { migrations };
