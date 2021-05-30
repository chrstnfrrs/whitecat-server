import { request, gql } from 'graphql-request';

describe('When the Hello query is called', () => {
  test('Then it should return Hello', async () => {
    const data = await request(
      `http://localhost:${process.env.PORT || 8080}`,
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

    expect(data.users[0].email).toStrictEqual('admin@test.com');
    expect(data.users[0].firstName).toStrictEqual('Christian');
    expect(data.users[0].lastName).toStrictEqual('Farris');
  });
});
