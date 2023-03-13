# @lotr-sdk

This SDK provides an easy-to-use interface for developers to consume information about The Lord of the Rings movies. It covers the following endpoints:

- /movie
- /movie/{id}
- /movie/{id}/quote

## Installation

This SDK can be installed using npm, pnpm or yarn:

```
npm install @lotr-sdk

pnpm add @lotr-sdk

yarn add @lotr-sdk
```

## Usage

To use this SDK, first require the package:

```typescript
// CommonJS
const { Movie } = require('@lotr-sdk');

// ES6
import { Movie } from '@lotr-sdk'
```

Then, you can make calls to the API using the provided methods. For example, to get information about all the Lord of the Rings movies:

```typescript
Movie.getMovies()
  .then(movies => console.log(movies))
  .catch(error => console.error(error));
```

To get information about a specific movie:

```typescript
lotr.getMovieById(movieId)
  .then(movie => console.log(movie))
  .catch(error => console.error(error));
```

To get quotes from a specific movie:

```typescript
lotr.getMovieQuotes(movieId)
  .then(quotes => console.log(quotes))
  .catch(error => console.error(error));
```

## Testing

This SDK includes unit tests using [Jest](https://jestjs.io/). To run the tests, use the following command:

```bash
npm test
```

## Contributing

If you encounter any issues or have suggestions for improvements, please feel free to create an issue or submit a pull request. All contributions are welcome!
