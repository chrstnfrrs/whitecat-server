import { helloResolver } from './hello-resolvers';

const resolvers = {
  Query: {
    hello: helloResolver,
  },
};

export { resolvers };
