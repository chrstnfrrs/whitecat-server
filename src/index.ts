import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { typeDefs } from './types/index';
import { resolvers } from './resolvers/index';

const app = express();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

apolloServer.applyMiddleware({ app, cors: false });

app.listen(4000, () => {
  console.log('🚀  Server ready at http://localhost:4000/graphql');
});
