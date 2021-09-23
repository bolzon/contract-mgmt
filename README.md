# Contracts Management

## About

Node.js REST API server designed to manage contracts.

### Database

It was used an in-memory mocked database whose values come from **[contracts.json](./api/db/contracts.json)** file.

### REST API

The app offers 3 different REST APIs:

1) `GET /contracts` to get all the contracts
2) `GET /contracts/{id}` to get contract whose ID is equal to `{id}`
3) `PUT /contracts/{id}` to update an existing contract whose ID is equal to `{id}`

### Modules

- **joi** to validate json schemas
- **express** framework to serve the REST API
- **lodash** as a helper to merge objects and get its parameters

### Good to have (but not implemented)

- GraphQL integration to get filtered content