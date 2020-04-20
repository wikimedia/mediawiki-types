# TypeScript definitions of MediaWiki front end code interfaces

NOTE: This exists as a separate repository for the time being. It has been created with idea in mind that it those definitions could be maintained together with MediaWiki front end code itself.

## Development

We recommend using Docker (e.g. via [fresh](https://github.com/wikimedia/fresh fresh)) as a development environment.

### Setup the development environment

* `npm install`

### Run all code quality tools
* `npm test`

### Run code quality tools individually
* `npm run test:lint` for linting, `npm run fix` for fixing auto-fixable lint errors
