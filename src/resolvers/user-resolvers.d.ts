import * as Types from '../index.d';

interface User {
  id: Types.Uuid;
  email: string;
  firstName: string;
  lastName: string;
}

interface IUserInput {
  email: string;
  firstName: string;
  lastName: string;
}

interface IUserUpdate {
  email: string;
  firstName: string;
  lastName: string;
}

type Create = (
  root: null,
  args: {
    input: IUserInput;
  },
  context: Types.IContext,
) => Promise<User>;

type Del = (
  root: null,
  args: {
    id: Types.Uuid;
  },
  context: Types.IContext,
) => Promise<boolean>;

type GetById = (
  root: null,
  args: {
    id: Types.Uuid;
  },
  context: Types.IContext,
) => Promise<User | null>;

type GetWhere = (
  root: null,
  args: null,
  context: Types.IContext,
) => Promise<User[]>;

type Update = (
  root: null,
  args: {
    id: Types.Uuid;
    input: IUserUpdate;
  },
  context: Types.IContext,
) => Promise<User>;

export { Create, Del, GetById, GetWhere, Update };
