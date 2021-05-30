import { request, gql } from 'graphql-request';

describe('When the Hello query is called', () => {
  test('Then it should return Hello', async () => {
    const data = await request(
      `http://localhost:${process.env.PORT || 8080}`,
      gql`
        query Hello {
          hello
        }
      `,
    );

    expect(data.hello).toStrictEqual('Hello');
  });
});
