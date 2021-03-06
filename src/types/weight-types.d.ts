import * as Types from '../index.d';

type ArgsCreate = {
  input: Input;
};

type ArgsDel = {
  id: Types.Uuid;
};

type ArgsGetById = {
  id: Types.Uuid;
};

type ArgsUpdate = {
  id: Types.Uuid;
  input: Update;
};

type ArgsWhere = {
  where: Where;
};

type RootGetByUserID = {
  id: Types.Uuid;
};

type Input = {
  date?: Date | string;
  userId: string;
  weight: float;
};

type ResolverCreate = (
  root: null,
  args: {
    input: {
      date?: Date | string;
      userId: string;
      weight: float;
    };
  },
  context: Types.IContext,
) => Promise<Weight>;

type ResolverDel = (
  root: null,
  args: {
    id: Types.Uuid;
  },
  context: Types.IContext,
) => Promise<boolean>;

type ResolverGetById = (
  root: null,
  args: {
    id: Types.Uuid;
  },
  context: Types.IContext,
) => Promise<Weight | null>;

type ResolverGetByUserId = (
  root: {
    id: Types.Uuid;
  },
  args: null,
  context: Types.IContext,
) => Promise<Weight[] | []>;

type ResolverGetWhere = (
  root: null,
  args: {
    where: {
      date?: Date;
      id?: string;
      userId?: string;
      weight?: float;
    };
  },
  context: Types.IContext,
) => Promise<Weight[]>;

type ResolverUpdate = (
  root: null,
  args: {
    id: Types.Uuid;
    input: {
      date?: Date;
      weight?: float;
    };
  },
  context: Types.IContext,
) => Promise<Weight>;

type Update = {
  date?: Date;
  weight?: float;
};

type Weight = {
  date: Date | string;
  id: string;
  userId: Types.Uuid;
  weight: float;
};

type Where = {
  date?: Date;
  id?: string;
  userId?: string;
  weight?: float;
};

export {
  ArgsDel,
  ArgsGetById,
  ArgsCreate,
  ArgsUpdate,
  ArgsWhere,
  RootGetByUserID,
  Input,
  Update,
  ResolverCreate,
  ResolverDel,
  ResolverGetById,
  ResolverGetByUserId,
  ResolverGetWhere,
  ResolverUpdate,
  Weight,
  Where,
};
