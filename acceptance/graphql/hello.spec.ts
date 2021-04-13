import { request, gql } from 'graphql-request';

describe('When the Hello query is called', () => {
  test('Then it should return Hello World', async () => {
    const data = await request(
      'http://localhost:8080/graphql',
      gql`
        query Hello {
          hello
        }
      `,
    );

    expect(data.hello).toStrictEqual('Hello World!');
  });
});
