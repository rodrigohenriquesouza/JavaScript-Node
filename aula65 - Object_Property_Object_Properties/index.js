// Object.defineProperty() - Object.defineProperties()
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave 
        value: estoque, // valor
        writable: true, // altera ou não
        configurable: false // configurável
    })
}

const p1 = new Produto('Luvas MMA', 230, 15)

p1.estoque = 25

for(let chave in p1) {
    console.log(p1[chave])
}
