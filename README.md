# bson-iterator

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Create an iterator from a BSON stream.

BSON file can be huge and it may not be possible to load the buffer array in memory to directly parse the bson.

This project allows to bypass this limit by processing directly a BSON stream.

## Installation

`$ npm i bson-iterator`

## Usage

```js
import { bonIterator } from 'bson-iterator';
import { join } from 'path';
import { createReadStream } from 'fs';

const readStream = createReadStream(join(__dirname, 'yourFile.bson'), {
  highWaterMark: 2 ** 20,
});
const results = [];
for await (const entry of bsonIterator(readStream)) {
  console.log(entry);
}
```

## [API Documentation](https://cheminfo.github.io/bson-iterator/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/bson-iterator.svg
[npm-url]: https://www.npmjs.com/package/bson-iterator
[ci-image]: https://github.com/cheminfo/bson-iterator/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/cheminfo/bson-iterator/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo/bson-iterator.svg
[codecov-url]: https://codecov.io/gh/cheminfo/bson-iterator
[download-image]: https://img.shields.io/npm/dm/bson-iterator.svg
[download-url]: https://www.npmjs.com/package/bson-iterator
