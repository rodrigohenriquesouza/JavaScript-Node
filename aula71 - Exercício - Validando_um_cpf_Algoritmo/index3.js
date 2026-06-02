// refazer exercicio validar CPF

class validaUmCpf {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            configurable: false,
            enumerable: true,
            value: cpf.replace(/\D+/g, '')
        })
    }

    verificaSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    valida() {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.verificaSequencia()) return false
        return 'CHEGUEI AQUI'
    }
}

const validaCpf = new validaUmCpf('482.085.428.30')
console.log(validaCpf.valida())