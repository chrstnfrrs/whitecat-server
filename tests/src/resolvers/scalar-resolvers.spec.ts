import Chance from 'chance';
import * as GraphQlTypes from 'graphql';

import * as ScalarTypes from '../../../src/resolvers/scalar-resolvers';

const chance = new Chance();

describe('Given scalar resolvers', () => {
  let result: Date | string, expected: Date | string;

  describe('When using a DateTimeScalar', () => {
    test('Then should have correct description', () => {
      expect(ScalarTypes.DateTime.description).toStrictEqual(
        'Date custom scalar type',
      );
    });
    test('Then should have correct name', () => {
      expect(ScalarTypes.DateTime.name).toStrictEqual('Date');
    });

    describe('When parsing literal', () => {
      describe('When INT', () => {
        beforeEach(() => {
          expected = chance.date();
          const ast = {
            kind: 'IntValue',
            value: expected,
          };

          result = ScalarTypes.DateTime.parseLiteral(
            ast as GraphQlTypes.ValueNode,
            null,
          );
        });
        test('Then should have correct parseValue', () => {
          expect(result).toStrictEqual(expected);
        });
      });
      describe('When not INT', () => {
        beforeEach(() => {
          const ast = {
            kind: chance.string(),
            value: expected,
          };

          result = ScalarTypes.DateTime.parseLiteral(
            ast as GraphQlTypes.ValueNode,
            null,
          );
        });
        test('Then should have correct parseValue', () => {
          expect(result).toBeNull();
        });
      });
    });
    describe('When parsing value', () => {
      beforeEach(() => {
        const value = chance.date();

        expected = value;
        result = ScalarTypes.DateTime.parseValue(value);
      });
      test('Then should return date', () => {
        expect(result).toStrictEqual(expected);
      });
    });
    describe('When serializing value', () => {
      beforeEach(() => {
        const value = chance.date();

        expected = value.toISOString();
        result = ScalarTypes.DateTime.serialize(value);
      });
      test('Then should return date', () => {
        expect(result).toStrictEqual(expected);
      });
    });
  });
});
