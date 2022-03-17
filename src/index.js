import { deserialize } from 'bson';

/**
 * Returns a very important number
 * @param {ReadStream} [readStream]
 */
export async function* bsonIterator(readStream) {
  let data = new Uint8Array(0);
  for await (const chunk of readStream) {
    data = concat(data, chunk);
    if (data.byteLength < 4) return;

    let start = 0;

    let length;
    while (
      data.byteLength > 4 &&
      (length =
        data[start] |
        (data[start + 1] << 8) |
        (data[start + 2] << 16) |
        (data[start + 3] << 24)) <
        data.byteLength - start
    ) {
      yield deserialize(data.subarray(start, start + length));
      start += length;
    }
    if (start > 0) {
      data = data.slice(start);
    }
  }
}

function concat(array, buffer) {
  const tmp = new Uint8Array(array.length + buffer.byteLength);
  tmp.set(array, 0);
  tmp.set(new Uint8Array(buffer), array.length);
  return tmp;
}
