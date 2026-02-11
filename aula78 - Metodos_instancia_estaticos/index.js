const _vel = Symbol()
class Carro {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
        this[_vel] = 0
    } 

        // metodo instanciado
    acelera(aumentoVelocidade) {
        this[_vel] += aumentoVelocidade
    }

    static consertarMotor() {
        console.log('Consertando motor')
    }
}

const camaro = new Carro('Camaro', 300000)

camaro.acelera(50)
Carro.consertarMotor()
