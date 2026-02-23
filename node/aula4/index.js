const fs = require('fs').promises
const path = require('path')

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files)
}

function walk(files) {
    for(let file of files) {
        console.log(file)
    }
}

readdir(path.resolve('E:/estudos/JavaScript-Node/node'))
/* fs.readdir(path.resolve(__dirname))
    .then(files => console.log(files))
    .catch(e => console.log(e))
 */
