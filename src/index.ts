import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import 'dotenv/config';

import { migrations } from './migrations';
import { typeDefs } from './types';
import { resolvers } from './resolvers';

const startServer = async () => {
  await migrations();

  const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
  });

  const server = new ApolloServer({
    introspection: true,
    playground: true,
    schema,
  });

  server.listen(process.env.PORT || 8080).then(() => {
    console.log('🚀  Server ready at http://localhost:8080/graphql');
  });
};

startServer();
