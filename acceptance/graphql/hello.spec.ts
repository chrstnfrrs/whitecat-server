import { request, gql } from 'graphql-request';

describe('When the Hello query is called', () => {
  test('Then it should return Hello', async () => {
    try {
      const data = await request(
        `http://localhost:${process.env.PORT || 8080}`,
        gql`
          query Hello {
            hello
          }
        `,
      );

      // eslint-disable-next-line no-console
      console.log('data', data);
      expect(data.hello).toStrictEqual('Hello');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error);
    }
  });
});
