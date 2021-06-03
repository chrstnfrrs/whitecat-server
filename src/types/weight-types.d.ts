import * as Types from '../index.d';

type Input = {
  date?: Date;
  userId: string;
  weight: float;
};

type Resolver = ResolverCreate;

type Update = {
  date?: Date;
  weight?: float;
};

type Weight = {
  date: Date;
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

export { Input, Update, Resolver, Weight, Where };
