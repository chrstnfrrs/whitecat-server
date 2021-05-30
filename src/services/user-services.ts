import { User, Uuid } from '../index.d';
import { prisma } from '../adapters/prisma-adapter';

const create = async (input: User.Input): Promise<User.User> => {
  const user = await prisma.user.create({ data: input });

  if (!user) {
    throw new Error('Failed to insert user');
  }

  return user;
};

const del = async (id: Uuid): Promise<boolean> =>
  Boolean(await prisma.user.delete({ where: { id } }));

const getById = async (id: Uuid): Promise<User.User | null> => {
  const user = await prisma.user.findUnique({ where: { id } });

  return user;
};

const getWhere = async (where: User.Where): Promise<User.User[] | []> => {
  const users = await prisma.user.findMany({ where });

  return users;
};

const update = async (
  id: Uuid,
  input: User.UpdateInput,
): Promise<User.User> => {
  const user = await prisma.user.update({
    data: input,
    where: { id },
  });

  if (!user) {
    throw new Error('Failed to update user');
  }

  return user;
};

export { create, del, getById, getWhere, update };
