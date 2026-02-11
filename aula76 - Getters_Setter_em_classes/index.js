const _vel = Symbol()
class Carro {
    constructor(nomeCarro) {
        this.nomeCarro = nomeCarro
        this[_vel] = 0
    }

    set velocidade(velocidade) {
        if (typeof velocidade !== 'number') return
        if (velocidade >= 100 || velocidade <= 0) return
        console.log('setter')
        this[_vel] = velocidade
    }

    get velocidade() {
        return this[_vel]
    }   

    

    acelerar() {
        if(this[_vel] >= 100) return
        this[_vel]++
    }

    freiar() {
        if(this[_vel] <= 0) return
        this[_vel]--
    }
}

const carro1 = new Carro('Camaro')

carro1.acelerar()
carro1.velocidade = 60
console.log(carro1.velocidade)