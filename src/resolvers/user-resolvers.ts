import { prisma } from '../adapters/prisma-adapter';

import * as UserResolvers from './user-resolvers.d';

const create: UserResolvers.Create = async (_root, args) => {
  const { input } = args;

  const user = await prisma.user.create({ data: input });

  if (!user) throw new Error('Failed to insert user');

  return user;
};

const del: UserResolvers.Del = async (_root, args) => {
  const { id } = args;

  const deletedUser = await prisma.user.delete({ where: { id } });

  return Boolean(deletedUser);
};

const getById: UserResolvers.GetById = async (_root, args) => {
  const { id } = args;

  const user = await prisma.user.findUnique({ where: { id } });

  return user;
};

const getWhere: UserResolvers.GetWhere = () => prisma.user.findMany();

const update: UserResolvers.Update = async (_root, args) => {
  const { id, input } = args;

  const user = await prisma.user.update({
    data: input,
    where: { id },
  });

  if (!user) throw new Error('Failed to update user');

  return user;
};

export { create, del, getById, getWhere, update };
