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

    expect(data.users).toStrictEqual([
      {
        email: 'admin@test.com',
        firstName: 'Christian',
        id: '87228c55-603d-4094-84bc-4cdadbef09dc',
        lastName: 'Farris',
      },
    ]);
  });
});
