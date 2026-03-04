const fs = require('fs').promises
const path = require('path')

async function diretorios(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const arquivos = await fs.readdir(rootDir)
    procuraArquivo(rootDir, arquivos)
}

async function procuraArquivo(rootDir, arquivos) {

    for(let arquivo of arquivos) {
        const caminhoCompletoArquivo = path.resolve(rootDir, arquivo)
        const status = await fs.stat(caminhoCompletoArquivo)

        if(status.isDirectory()) {
            diretorios(caminhoCompletoArquivo)
            continue
        }

        if(!/.html/g.test(caminhoCompletoArquivo)) {
            continue
        }
        console.log(caminhoCompletoArquivo)
    }   
}

diretorios('E:/estudos/JavaScript-Node')