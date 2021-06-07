# WhiteCat Server

This is the server that runs **whitecat**. It's an Apollo server that connects to a PostgreSQL database using Knex.

[![Acceptance](https://github.com/chrstnfrrs/whitecat-server/actions/workflows/acceptance.yaml/badge.svg)](https://github.com/chrstnfrrs/whitecat-server/actions/workflows/acceptance.yaml) [![Coverage](https://github.com/chrstnfrrs/whitecat-server/actions/workflows/coverage.yaml/badge.svg)](https://github.com/chrstnfrrs/whitecat-server/actions/workflows/coverage.yaml) [![Lint](https://github.com/chrstnfrrs/whitecat-server/actions/workflows/lint.yaml/badge.svg)](https://github.com/chrstnfrrs/whitecat-server/actions/workflows/lint.yaml) [![Prettier](https://github.com/chrstnfrrs/whitecat-server/actions/workflows/prettier.yaml/badge.svg)](https://github.com/chrstnfrrs/whitecat-server/actions/workflows/prettier.yaml) [![TypeCheck](https://github.com/chrstnfrrs/whitecat-server/actions/workflows/typeCheck.yaml/badge.svg)](https://github.com/chrstnfrrs/whitecat-server/actions/workflows/typeCheck.yaml)

## Scripts

1. `yarn install` - install dependencies
2. `yarn docker:infra` - create a local, dockerized postgres instance
3. `yarn docker:setup` - run migrations and fill the postgres db with data
4. `yarn docker:generate` - create database client
5. `yarn docker:migrate` - run database migrations
6. `yarn dev` - run dev server
7. `yarn verify` - checks typescript types, style, formating, coverage

## Acceptance Tests

Acceptance tests are documented in their own [README](https://github.com/chrstnfrrs/whitecat-server/tree/main/tests/acceptance). For running acceptance tests: [Running Acceptance Tests](https://github.com/chrstnfrrs/whitecat-server/tree/main/tests/acceptance#running-acceptance-tests)

## Using GraphQL Playground

After running `yarn dev` the graphql server will have a graphql playground available at: `http://localhost:8080/graphql`.

Here you'll have access to multiple graphql queries and mutations.

### Getting Started: The Hello Query

A base query on this server is hello. It's a query that resolves to a static string.

When this query is called:

```
query Hello {
  hello
}
```

The response should appear as:

```
{
  "data": {
    "hello": "Hello World"
  }
}
```
