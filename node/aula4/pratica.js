const fs = require('fs').promises
const path = require('path')

async function leDiretorios(rootDir) {
rootDir = rootDir || path.resolve(__dirname)
const files = await fs.readdir(rootDir)
}