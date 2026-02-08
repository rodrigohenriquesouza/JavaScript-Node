// new Object -> Object.prototype

/* const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

const objC = {
    chave: 'C'
}

Object.setPrototypeOf(objB, objA)   // Hierarquia de prototypes
Object.setPrototypeOf(objC, objB)

console.log(objC.chaveB)
console.log(objC.chaveA)
 */

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

const produto1 = new Produto('Shorts', 100)
Object.setPrototypeOf(produto1, Produto.prototype)

const produto2 = {
    nome: 'Corrente-Prata',
    preco: 300
}

Object.setPrototypeOf(produto2, produto1)

const produto3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        value: 'Corrente-Ouro',
        enumerable: true
    },
    preco: {
        writable: true,
        configurable: true,
        value: 1000,
        enumerable: true
    }
})

produto3.desconto(10)
console.log(produto3)



