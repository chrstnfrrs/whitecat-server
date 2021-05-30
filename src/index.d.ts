import * as User from './types/user-types.d';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IContext {}
interface GraphqlError {
  error: Error;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AllowAny = any;
type Uuid = string;

export { AllowAny, IContext, GraphqlError, Uuid, User };
