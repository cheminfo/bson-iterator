import { createReadStream } from 'fs';
import { join } from 'path';

import { bsonIterator } from '..';

test('bsonIterator', () => {
  const readStream = createReadStream(join(__dirname, 'data/fragment.bson'));
});
