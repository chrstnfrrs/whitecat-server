# WhiteCat Server

This is the server that runs **whitecat**. It's an Apollo server that connects to a PostgreSQL database using Knex.

[![Verify PR](https://github.com/chrstnfrrs/whitecat-server/actions/workflows/verify.yaml/badge.svg)](https://github.com/chrstnfrrs/whitecat-server/actions/workflows/verify.yaml)

## Scripts

1. `yarn` - install dependencies
2. `yarn docker:infra` - create a local, dockerized postgres instance
3.  `yarn docker:setup` - run migrations and fill the postgres db with test data
2. `yarn dev` - run server
3. `yarn verify` - runs prettier, eslint, and code coverage

## Using GraphQL Playground

After running `yarn dev` the graphql server will have a graphql playground available at: `http://localhost:4000/graphql`.

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

## Running Acceptance Tests

Running acceptance tests is a two step process.

1. In terminal A, run the commands necessary to start the server: `yarn dev`.
2. In terminal B, run the test suite: `yarn acceptance`.
