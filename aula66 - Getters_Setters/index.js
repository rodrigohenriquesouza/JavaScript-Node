
// pratica com Constructor function
function ProdutosMMA(produto, preco, estoque) {
    this.produto = produto
    this.preco = preco

    let estoqueLoja = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoqueLoja
        },
        set: function(qtd) {
            
            if (typeof qtd !== 'number') {
                throw new TypeError('Aceita somento numeros')
            }
            estoqueLoja = qtd
        }
    })
}

const luva = new ProdutosMMA('luva', 200, 10) 

luva.estoque = 20
console.log(luva.estoque)

// pratica com Factory function
function camisas(cor) {
    return {
        get cor() {
            return cor
        },
        set cor(tipoDeCor) {
            if (typeof tipoDeCor !== 'string') throw new TypeError('Escreva a cor da camisa')
            cor = tipoDeCor
        }
}
}

const camisaAzul = camisas('Azul escuro')
camisaAzul.cor = 'Vermelha'
