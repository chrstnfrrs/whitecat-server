import { ApolloServer, makeExecutableSchema } from 'apollo-server';

import { typeDefs } from './types/index';
import { resolvers } from './resolvers/index';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true,
});

server.listen(process.env.PORT || 8080).then(() => {
  console.log('🚀  Server ready at http://localhost:8080/graphql');
});
