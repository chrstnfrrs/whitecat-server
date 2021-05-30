import { PrismaClient } from '@prisma/client';
import { mockDeep } from 'jest-mock-extended';

jest.mock('../src/adapters/prisma-adapter', () => ({
  __esModule: true,
  prisma: mockDeep<PrismaClient>(),
}));

export {};
