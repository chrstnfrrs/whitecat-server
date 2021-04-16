import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import 'dotenv/config';

import { typeDefs } from './types';
import { resolvers } from './resolvers';
import db from './querybuilder';

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

const server = new ApolloServer({
  introspection: true,
  playground: true,
  schema,
});

const runMigrations = async () => {
  try {
    const hasUsers = await db.schema.hasTable('users');
    console.log('hasUsers', hasUsers);
  } catch (error) {
    console.log('run migrations error', error);
  }
};

try {
  runMigrations();
} catch (error) {
  console.log('error', error);
}

server.listen(process.env.PORT || 8080).then(() => {
  console.log('🚀  Server ready at http://localhost:8080/graphql');
});
