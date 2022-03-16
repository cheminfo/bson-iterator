import { createReadStream } from 'fs';
import { join } from 'path';

import { bsonIterator } from '..';

test('bsonIterator', async () => {
  const readStream = createReadStream(join(__dirname, 'data/fragment.bson'));
  for await (const entry of bsonIterator(readStream)) {
    console.log(entry);
  }
});
