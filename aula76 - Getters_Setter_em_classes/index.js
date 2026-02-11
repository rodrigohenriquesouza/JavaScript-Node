class Carro {
    constructor(nomeCarro, velocidade) {
        this.nomeCarro = nomeCarro
        this.velocidade = 0
    }

    acelerar() {
        if(this.velocidade >= 100) return
        this.velocidade++
    }

    desacelerar() {
        if(this.desacelerar <= 0) return
        this.velocidade--
    }
}

const carro1 = new Carro()