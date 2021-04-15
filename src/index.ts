import { ApolloServer, makeExecutableSchema } from 'apollo-server';

import { typeDefs } from './types';
import { resolvers } from './resolvers';

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
  // eslint-disable-next-line no-console
  console.log('🚀  Server ready at http://localhost:8080/graphql');
});
