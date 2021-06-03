import * as User from './types/user-types.d';
import * as Weight from './types/weight-types.d';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IContext {}
interface GraphqlError {
  error: Error;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AllowAny = any;
type Uuid = string;

type CreateGraphqlError = ({ error: any }) => GraphqlError;

export {
  AllowAny,
  CreateGraphqlError,
  IContext,
  GraphqlError,
  Uuid,
  User,
  Weight,
};
