const fs = require('fs').promises
const path = require('path')

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir()
}

/* fs.readdir(path.resolve(__dirname))
    .then(files => console.log(files))
    .catch(e => console.log(e))
 */
