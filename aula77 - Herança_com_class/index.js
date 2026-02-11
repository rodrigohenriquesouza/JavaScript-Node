class Dispotivo {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado === true) {
            console.log(`${this.nome} ja ligado!`)
        return
        }
        this.ligado = true
    }

    desligar() {
        if (this.ligado === false) {
            console.log(`${this.nome} ja desligado!`)
            return
        }
        this.ligado = false
    }
}

class Celular extends Dispotivo {
    constructor(nome, modelo, cor) {
        super(nome)
        this.modelo = modelo
        this.cor = cor
    }
}

class Torradeira extends Dispotivo {
    constructor(nome, makePao) {
        super(nome)
        this.makePao = makePao
    }

    fazerPao() {
        if (this.makePao !== true) return
        console.log(`Fazendo pão quentinho`)
    }

    ligar() {
        if (this.ligado === true) {
            console.log(`Torradeira ja ligada`)
            return
        }
        this.ligado = true
    }
    
}


const celular1 = new Celular('IPHONE', 'IPHONE 10', 'Branco')
const torradeira = new Torradeira('Torradeira eletrolux', true)

torradeira.fazerPao()
torradeira.ligar()
torradeira.ligar()







