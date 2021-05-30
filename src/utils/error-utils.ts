import { CreateGraphqlError } from '../index.d';

const createGraphqlError: CreateGraphqlError = ({ error }) => {
  return {
    error,
  };
};

export { createGraphqlError };
