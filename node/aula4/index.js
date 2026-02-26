const fs = require('fs').promises
const path = require('path')

async function leDiretorios() {

    const files = await fs.readdir(path.resolve(__dirname))
    console.log(files)
}

leDiretorios()