import { createReadStream } from 'fs';
import { join } from 'path';

import { bsonIterator } from '..';

test('bsonIterator', async () => {
  const readStream = createReadStream(join(__dirname, 'data/fragment.bson'), {
    highWaterMark: 2 ** 20,
  });
  const results = [];
  for await (const entry of bsonIterator(readStream)) {
    results.push(entry);
  }
  expect(results).toHaveLength(83666);
  expect(results[0]).toMatchInlineSnapshot(`
    Object {
      "_class": "de.unijena.cheminf.lotusfiller.mongocollections.Fragment",
      "_id": "604b8dc012e4996162765056",
      "height": 2,
      "presentInMolecules": Array [],
      "scorenp": -1.0726545329470698,
      "signature": "[C]([C]([C]=[C])[C]([C][H][H])[H][N]([H][N]))",
      "withsugar": 0,
    }
  `);
  expect(results[83665]).toMatchInlineSnapshot(`
    Object {
      "_class": "de.unijena.cheminf.lotusfiller.mongocollections.Fragment",
      "_id": "604b8dd612e4996162779727",
      "height": 2,
      "presentInMolecules": Array [],
      "scorenp": 1,
      "signature": "[C]([C]([C][C][C])[C]([H][H][H])[H][O]([P]))",
      "withsugar": 1,
    }
  `);
});
