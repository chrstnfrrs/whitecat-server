import * as ErrorUtils from '../utils/error-utils';
import * as WeightServices from '../services/weight-services';
import * as Types from '../index.d';

const create: Types.Weight.ResolverCreate = async (_root, args) => {
  const { input } = args;

  try {
    return await WeightServices.create(input);
  } catch (error) {
    throw ErrorUtils.createGraphqlError(error);
  }
};

const del: Types.Weight.ResolverDel = async (_root, args) => {
  const { id } = args;

  try {
    return await WeightServices.del(id);
  } catch (error) {
    throw ErrorUtils.createGraphqlError(error);
  }
};

const getById: Types.Weight.ResolverGetById = async (_root, args) => {
  const { id } = args;

  try {
    return await WeightServices.getById(id);
  } catch (error) {
    throw ErrorUtils.createGraphqlError(error);
  }
};

const getByUserId: Types.Weight.ResolverGetByUserId = async (root) => {
  const { userId } = root;

  try {
    return await WeightServices.getById(userId);
  } catch (error) {
    throw ErrorUtils.createGraphqlError(error);
  }
};

const getWhere: Types.Weight.ResolverGetWhere = async (_root, args) => {
  const { where } = args;

  try {
    return await WeightServices.getWhere(where);
  } catch (error) {
    throw ErrorUtils.createGraphqlError(error);
  }
};

const update: Types.Weight.ResolverUpdate = async (_root, args) => {
  const { id, input } = args;

  try {
    return await WeightServices.update(id, input);
  } catch (error) {
    throw ErrorUtils.createGraphqlError(error);
  }
};

export { create, del, getById, getByUserId, getWhere, update };
