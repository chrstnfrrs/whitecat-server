import * as ErrorUtils from '../utils/error-utils';
import * as UserServices from '../services/user-services';
import * as Types from '../index.d';

const create: Types.User.Create = async (_root, args) => {
  const { input } = args;

  try {
    return await UserServices.create(input);
  } catch (error) {
    throw ErrorUtils.createGraphqlError(error);
  }
};

const del: Types.User.Del = async (_root, args) => {
  const { id } = args;

  try {
    return await UserServices.del(id);
  } catch (error) {
    throw ErrorUtils.createGraphqlError(error);
  }
};

const getById: Types.User.GetById = async (_root, args) => {
  const { id } = args;

  try {
    return await UserServices.getById(id);
  } catch (error) {
    throw ErrorUtils.createGraphqlError(error);
  }
};

const getByIdRoot: Types.User.GetByIdRoot = async (root) => {
  const { userId } = root;

  try {
    return await UserServices.getById(userId);
  } catch (error) {
    throw ErrorUtils.createGraphqlError(error);
  }
};

const getWhere: Types.User.GetWhere = async (_root, args) => {
  const { where } = args;

  try {
    return await UserServices.getWhere(where);
  } catch (error) {
    throw ErrorUtils.createGraphqlError(error);
  }
};

const update: Types.User.Update = async (_root, args) => {
  const { id, input } = args;

  try {
    return await UserServices.update(id, input);
  } catch (error) {
    throw ErrorUtils.createGraphqlError(error);
  }
};

export { create, del, getById, getByIdRoot, getWhere, update };
