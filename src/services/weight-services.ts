import { Weight, Uuid } from '../index.d';
import { prisma } from '../adapters/prisma-adapter';
import * as WeightModels from '../models/weight';

const create = async (input: Weight.Input): Promise<Weight.Weight> => {
  const user = await prisma.user.findUnique({ where: { id: input.userId } });

  if (!user) {
    throw new Error('User associated with weight not found');
  }

  const weight = await prisma.weight.create({ data: input });

  if (!weight) {
    throw new Error('Failed to insert weight');
  }

  return weight;
};

const del = async (id: Uuid): Promise<boolean> =>
  Boolean(await prisma.weight.delete({ where: { id } }));

const getById = async (id: Uuid): Promise<Weight.Weight | null> => {
  const weight = await prisma.weight.findUnique({ where: { id } });

  return weight;
};

const getByUserId = async (userId: Uuid): Promise<Weight.Weight[] | null> => {
  const weights = await prisma.weight.findMany({ where: { userId } });

  return weights ? WeightModels.mapToCollection(weights) : [];
};

const getWhere = async (where: Weight.Where): Promise<Weight.Weight[] | []> => {
  const weights = await prisma.weight.findMany({ where });

  return weights;
};

const update = async (
  id: Uuid,
  input: Weight.Update,
): Promise<Weight.Weight> => {
  const weight = await prisma.weight.update({
    data: input,
    where: { id },
  });

  if (!weight) {
    throw new Error('Failed to update weight');
  }

  return weight;
};

export { create, del, getById, getByUserId, getWhere, update };
