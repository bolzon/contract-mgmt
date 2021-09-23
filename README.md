# Contracts Management

<sup>2021-09-24</sup>

## About

Node.js REST API server designed to manage contracts.

Install and run the application.

```sh
$ npm install
$ npm start
```

Test the application.

```sh
$ npm test
```

### Database

It was used an in-memory mocked database whose values come from **[contracts.json](./api/db/contracts.json)** file.

### REST API

The app offers 3 different REST APIs:

1) `GET /contracts` to get all the contracts
2) `GET /contracts/{id}` to get contract whose ID is equal to `{id}`
3) `PUT /contracts/{id}` to update an existing contract whose ID is equal to `{id}`

I've chosen the correct verbs following REST APIs best-practices (GET for listing, PUT for updating).

Input validation was implemented to guarantee there will be no inconsistent data.

I've separated the application in 3 layers: 1) server, 2) controller, and 3) database.
This level of abstraction makes it easier for me whether I decide to change the database implementation, for example.

I've implemented some integration tests, not covering all possible cases for the sake of time.

Filtering, pagination and sorting was not implemented because I'd do it using GraphQL, which would make that very clear, easy and functional, but again, for the sake of time.

### Modules

- **joi** to validate json schemas
- **mocha/chai** to run integration tests
- **express** framework to serve the REST API
- **lodash** as a helper to merge objects and get its parameters

### Good to have (but not implemented)

- GraphQL integration to get filtered content