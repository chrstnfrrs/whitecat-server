const config = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      user:     process.env.DB_USER,
    }
  },
};

export default config
