const fs = require('fs').promises
const path = require('path')

async function leDiretorios(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walkFiles(files)
}

function walkFiles(files) {
    for(let file of files) {
        console.log(file)
    }
}

leDiretorios('E:/estudos/JavaScript-Node')