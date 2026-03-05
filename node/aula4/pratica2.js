const fs = require('fs').promises
const path = require('path')

async function diretorios(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    procuraFiles(rootDir, files)
}

async function procuraFiles(rootDir, files) {
    for(let file of files) {
        const caminhoFile = path.resolve(rootDir, file)
        const statusFile = await fs.stat(caminhoFile)

        if(statusFile.isDirectory()) {
            diretorios(caminhoFile)
            continue
        }
    }
}

diretorios('E:/estudos/JavaScript-Node')
