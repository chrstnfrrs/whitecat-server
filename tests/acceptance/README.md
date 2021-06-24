# Acceptance Tests

## Running Acceptance Tests

Running acceptance tests is a two step process.

1. Ensure the necessary infrastructure is running
2. Run yarn acceptance

** You cannot have a locally running instance of postgres to run dockerized postgres **
To stop locally running postgres `brew services stop postgresql`.

### Starting Infrastructure

You must start the server and connect to a database to run acceptance tests. Following these steps will meet the requirements.

**In Terminal A**

1. Install dependencies: `yarn install`
2. Build Server: `yarn build`
3. Start Database: `yarn docker:infra`
4. Setup Prisma: `yarn docker:generate && yarn docker:migrate`
5. Start server: `yarn dev` or `yarn start`

### Running tests

Acceptance tests will clear your locally running database, setup new data, and then run end-to-end tests.

**In Terminal B**

1. Run tests: `yarn acceptance`.
