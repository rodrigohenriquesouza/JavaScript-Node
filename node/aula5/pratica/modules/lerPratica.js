const fs = require('fs').promises

module.exports = (arquivo) => fs.readFile(arquivo)
