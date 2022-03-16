/**
 * Returns a very important number
 * @param {ReadableStream} [readStream]
 */
export async function bsonIterator(readStream) {
  // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', () => {});

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', (err) => {
    reject(err);
  });

  return 42;
}
