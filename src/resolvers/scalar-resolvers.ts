import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

import { AllowAny } from '../index.d';

const Date: AllowAny = new GraphQLScalarType({
  description: 'Date custom scalar type',
  name: 'Date',
  parseLiteral: (ast) => {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value); // ast value is always in string format
    }

    return null;
  },
  parseValue: (value) => {
    return new Date(value); // value from the client
  },
  serialize: (value) => {
    return value.toISOString(); // value sent to the client
  },
});

export { Date };
