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
        const status = await fs.stat(caminhoArquivo)

        if(status.isDirectory()) {
            leDiretorios(caminhoArquivo)
            continue
        }
        if(!/.css$/g.test(caminhoArquivo) && !/.html$/g.test(caminhoArquivo)) {
            continue
        }
        caminhoArquivo
    }
}

leDiretorios('E:/estudos/JavaScript-Node')