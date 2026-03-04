const fs = require('fs').promises
const path = require('path')

async function arquivos(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const arquivos = await fs.readdir(rootDir)
    procuraArquivo(arquivos, rootDir)
}

async function procuraArquivo(arquivos, rootDir) {
    for(let arquivo of arquivos) {
        const caminhoArquivo = path.resolve(rootDir, arquivo)
    }
}