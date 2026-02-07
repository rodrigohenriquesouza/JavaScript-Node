function ProdutosMMA(produto, preco, estoque) {
    this.produto = produto
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoque
        },
        set: function(qtd) {
            
            if (typeof qtd !== 'number') {
                throw new TypeError('Aceita somento numeros')
            }
            estoque = qtd
        }
    })
}

const luva = new ProdutosMMA('luva', 200, 10)
