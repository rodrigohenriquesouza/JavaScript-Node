const fs = require('fs').promises
const path = require('path')

async function diretorios(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const arquivos = await fs.readdir(rootDir)
    procuraArquivo(arquivos, rootDir)
}

async function procuraArquivo(arquivos, rootDir) {
    for(let arquivo of arquivos) {
        const caminhoArquivo = path.resolve(rootDir, arquivo)
        const stats = await fs.stat(caminhoArquivo)

        if(stats.isDirectory()) {
            diretorios(caminhoArquivo)
            continue
        }

        if(!/.css$/g.test(caminhoArquivo) && !/.html$/g.test(caminhoArquivo)) {
            continue
        }
        console.log(caminhoArquivo)
    }
}

diretorios('E:/estudos/JavaScript-Node')