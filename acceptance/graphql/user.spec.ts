import { request, gql } from 'graphql-request';

describe('When the Hello query is called', () => {
  test('Then it should return Hello', async () => {
    const data = await request(
      'http://localhost:8080/graphql',
      gql`
        query Users {
          users {
            id
            firstName
            lastName
            email
          }
        }
      `,
    );

    // eslint-disable-next-line no-console
    console.log('data', data);

    expect(data.users.length).toBeGreaterThanOrEqual(1);
  });
});
