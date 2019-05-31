# Boilerplate - Libs

## 🏗 Building

Compile the library from TypeScript to JavaScript.

The following command is available:

- `npm run build`

  Builds the library

## 🧪 Tests

There are three types of tests:

- unit tests
- integration tests
- functional tests

### 🔬 Unit Tests

These tests have no dependencies outside the tested file (exception: class inheritance). All dependencies are mocked.

A test coverage of 100% should be achieved.

The following commands are available:

- `npm run test`

  Run all unit tests

- `npm run test:watch`

  Watching mode, each change is registered and the unit tests are rerun

- `npm run coverage`

  Run all unit tests and creates a coverage report

### 🔭 Integration Tests

These tests have no dependencies outside the project. All dependencies in the package.json file are mocked.
Small libraries, e.g. lodash or luxon, don't need to be mocked.

A test coverage between 50% and 75% should be achieved.

The following commands are available:

- `npm run test:integration`

  Run all integration tests

- `npm run test:integration:watch`

  Watching mode, each change is registered and the unit tests are rerun

- `npm run coverage:integration`

  Run all integration tests and creates a coverage report

### 📡 Functional Tests

These tests are performed with all dependencies. External services, e.g. MySQL, will/must be provided via docker.

No dependency should be mocked.

A test coverage between 50% and 75% should be achieved.

The following commands are available:

- `npm run test:functional`

  Run all functional tests

- `npm run test:functional:watch`

  Watching mode, each change is registered and the unit tests are rerun

- `npm run coverage:functional`

  Run all functional tests and creates a coverage report

## 🖋 Prettier and Lint

Ensures that the code is formatted uniformly and that the coding standards are adhered to.

The following commands are available:

- `npm run prettier`

  Changes the code formatting as defined in the Prettier setting.

- `npm run lint`

  Checks if the lint rules are followed. It calls the prettier command first.

## 📚 Docs

Creates documentation from the comments in the source code.

The following command is available:

- `npm run docs`

  Creates documentation from the source code
