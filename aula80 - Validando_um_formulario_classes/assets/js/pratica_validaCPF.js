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
        if(this.cpfLimpo.length !== 11) return false
        if(this.sequencial()) return false

        const cpfFatiado = this.cpfLimpo.slice(0, -2)
        const digito1 = this.pegaDigitos(cpfFatiado)
        const digito2 = this.pegaDigitos(cpfFatiado + digito1)
        const cpfCompleto = cpfFatiado + digito1 + digito2

        return cpfCompleto === this.cpfLimpo
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
        return digito > 9 ? '0' : String(digito)
    }

    sequencial() {
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo
    }
}