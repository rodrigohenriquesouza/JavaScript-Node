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

    geraNovoCpf() {
        const cpfSemDigito = this.cpfLimpo.slice(0, -2)
        const geraDigito1 = this.geraDigito(cpfSemDigito)
        const geraDigito2 = this.geraDigito(cpfSemDigito + geraDigito1)
    }

    geraDigito(cpfSemDigitos) {
        let total = 0 
        let reverso = cpfSemDigitos.length + 1

        for(let stringNumerica of cpfSemDigitos) {

        }
    }

    valida() {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.verificaSequencia()) return false
        if(!this.geraNovoCpf()) return false
    }
}

const validaCpf = new validaUmCpf('482.085.428.30')
console.log(validaCpf.valida())