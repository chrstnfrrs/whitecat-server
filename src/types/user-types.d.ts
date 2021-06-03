import * as Types from '../index.d';

type User = {
  id: Types.Uuid;
  email: string;
  firstName: string;
  lastName: string;
};

type Input = {
  email: string;
  firstName: string;
  lastName: string;
};

type UpdateInput = {
  email?: string;
  firstName?: string;
  lastName?: string;
};

type Where = {
  email?: string;
  firstName?: string;
  lastName?: string;
};

type CreateArgs = {
  input: IUserInput;
};

type DelArgs = {
  id: Types.Uuid;
};

type GetByIdArgs = {
  id: Types.Uuid;
};

type GetWhereArgs = {
  where: Where;
};

type UpdateArgs = {
  id: Types.Uuid;
  input: UpdateInput;
};

type NestedRoot = {
  userId: Types.Uuid;
};

type Root = NestedRoot | null;

type Args = CreateArgs | DelArgs | GetById | GetWhereArgs | UpdateArgs | null;

type Create = (
  root: null,
  args: {
    input: {
      email: string;
      firstName: string;
      lastName: string;
    };
  },
  context: Types.IContext,
) => Promise<IUser>;

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
) => Promise<IUser | null>;

type GetByIdRoot = (
  root: {
    userId: Types.Uuid;
  },
  args: null,
  context: Types.IContext,
) => Promise<IUser | null>;

type GetWhere = (
  root: null,
  args: {
    where: {
      email?: string;
      firstName?: string;
      lastName?: string;
    };
  },
  context: Types.IContext,
) => Promise<IUser[]>;

type Update = (
  root: null,
  args: {
    id: Types.Uuid;
    input: {
      email?: string;
      firstName?: string;
      lastName?: string;
    };
  },
  context: Types.IContext,
) => Promise<IUser>;

export {
  Args,
  Create,
  CreateArgs,
  Del,
  DelArgs,
  GetById,
  GetByIdRoot,
  GetByIdArgs,
  GetWhere,
  GetWhereArgs,
  Update,
  UpdateArgs,
  User,
  Input,
  UpdateInput,
  Where,
  Root,
  NestedRoot,
};
