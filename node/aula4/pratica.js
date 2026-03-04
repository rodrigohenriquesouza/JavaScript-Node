const fs = require('fs').promises
const path = require('path')

async function arquivos(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
}