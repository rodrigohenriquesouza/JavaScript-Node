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

function Caneca(nome, valor, material, estoque) {
    Produto.call(this, nome, valor)
    this.material = material
    Object.defineProperty(this, 'estoque', {
        configurable: false,
        enumerable: true,
        get: function() {
            return estoque
        },
        set: function(qtd) {
            if (typeof qtd !== 'number') {
                throw new TypeError('Aceita somente números')
            }
            estoque = qtd
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta
Camiseta.prototype.aumentoPorcentagem = function (aumento) {
    this.valor = this.valor + (this.valor * aumento / 100)
}

Camiseta.prototype.descontoPorcentagem = function (desconto) {
    this.valor = this.valor - (this.valor * desconto / 100)
}

const produtoQualquer = new Produto('Luva-Boxe', 300)
const camisetaRoxa = new Camiseta('Camisa', 30, 'Roxa')
const canecaPorcelana = new Caneca('Caneca-G', 20, 'Porcelana', 10)

canecaPorcelana.estoque = 5

console.log(canecaPorcelana.estoque)