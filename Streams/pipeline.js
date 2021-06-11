const stream = require('stream');
const util = require('util');
const fs = require('fs');
const pipeline = util.promisify(stream.pipeline);

async function run() {
    await pipeline(
        fs.createReadStream('../EventEmitter/hello.txt'),
        async function* (source) {
            source.setEncoding('utf8');  // Work with strings rather than `Buffer`s.
            for await (const chunk of source) {
                yield chunk.toUpperCase();
            }
        },
        fs.createWriteStream('uppercase.txt')
    );
    console.log('Pipeline succeeded.');
}

run().catch(console.error);