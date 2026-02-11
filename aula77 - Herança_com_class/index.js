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


const celular1 = new Celular('IPHONE', 'IPHONE 10', 'Branco')
celular1.ligar()
console.log(celular1)




