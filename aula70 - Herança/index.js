// Produto
// Camiseta, caneca

function Produto(nome, valor) {
    this.nome = nome
    this.valor = valor
}

Produto.prototype.aumento = function (aumento) {
    this.valor += aumento
}

Produto.prototype.desconto = function(desconto) {
    this.valor -= desconto
}

function Camiseta(nome, valor, cor) {
    Produto.call(this, nome, valor)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

const produtoQualquer = new Produto('Luva-Boxe', 300)
const camisetaRoxa = new Camiseta('Camisa', 100, 'Roxa')
console.log(produtoQualquer)
camisetaRoxa.aumento(20)
console.log(camisetaRoxa)