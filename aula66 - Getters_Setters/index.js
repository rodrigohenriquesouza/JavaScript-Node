function Produtos(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    let estoqueLoja = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoqueLoja
        },

        set: function(valor) {         // Validar o parametro passado
            estoqueLoja = valor
            if ( typeof valor !== 'number') throw new TypeError('O estoque aceita somente numeros')
        }
    })
}

const p1 = new Produtos('Camiseta', 20, 3)

p1.estoque = 'araraquara'

