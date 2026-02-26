const fs = require('fs').promises
const path = require('path')

async function leDiretorios(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walkFiles(files, rootDir)
}

async function walkFiles(files, rootDir) {
    for(let file of files) {
    const fileFullPath = path.resolve(rootDir, file)
    const stats = await fs.stat(fileFullPath)

    if(stats.isDirectory()) {
        leDiretorios(fileFullPath)
        continue
    }

    if(/node_modules/g.test(fileFullPath)) {
        continue
    }

    if(!/.css$/g.test(fileFullPath) &&  !/.html$/g.test(fileFullPath)){
        continue
    }

        console.log(fileFullPath)
    }
}

leDiretorios('E:/estudos/JavaScript-Node')