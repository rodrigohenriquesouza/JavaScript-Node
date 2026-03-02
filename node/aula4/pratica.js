const fs = require('fs').promises
const path = require('path')

async function leDiretorios(rootDir) {
rootDir = rootDir || path.resolve(__dirname)
const files = await fs.readdir(rootDir)
procuraArquivo(files, rootDir)
}

async function procuraArquivo(files, rootDir) {
    for(let file of files) {
        const caminhoArquivo = path.resolve(rootDir, file)
        const status = fs.stat(caminhoArquivo)
    }
}