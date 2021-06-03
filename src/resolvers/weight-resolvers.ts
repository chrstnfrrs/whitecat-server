import { AllowAny } from '../index.d';
import { prisma } from '../adapters/prisma-adapter';

const create: AllowAny = async (_root: AllowAny, args: AllowAny) => {
  const { input } = args;

  const weight = await prisma.weight.create({ data: input });

  if (!weight) {
    throw new Error('Failed to insert weight');
  }

  return weight;
};

const getByUserId: AllowAny = async (root: AllowAny) => {
  const { id } = root;

  const weight = await prisma.weight.findMany({ where: { userId: id } });

  if (!weight) {
    throw new Error('Weight is null');
  }

  return weight;
};

export { create, getByUserId };
