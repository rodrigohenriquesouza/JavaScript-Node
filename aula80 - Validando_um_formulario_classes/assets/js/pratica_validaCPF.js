class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            get() {
                return cpf.replace(/\D+/g, '')
            }
        })
    }

    valida() {
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length > 11) return false

        const cpfFatiado = this.cpfLimpo.slice(0, -2)
        const digito1 = this.pegaDigitos(cpfFatiado)
        const digito2 = this.pegaDigitos(cpfFatiado)
    }

    pegaDigitos(cpfFatiado) {
        const arrayCPF = Array.from(cpfFatiado)
        let regressor = arrayCPF.length + 1
        const total = arrayCPF.reduce((acml, nCPF) => {
            acml += Number(nCPF) * regressor
            regressor--
            return acml
        }, 0)

        const digito = 11 - (total % 11)
        return digito > 9 ? '0' : digito
    }
}

const cpf = new ValidaCPF('482.085.428.30')
cpf.valida()
