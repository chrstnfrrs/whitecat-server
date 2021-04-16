const config = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      // host: process.env.DB_HOST,
      host: `${process.env.DB_HOST}/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USER,
    },
    pool: {
      max: 20,
      min: 1,
    },
  },
};

export default config;
