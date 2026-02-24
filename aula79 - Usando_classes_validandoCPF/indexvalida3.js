class validadorCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpado', {
            get() {
                return cpf.replace(/\D+/g, '')
            }
        })
}

    segurancaCPF() {
        if(typeof this.cpfLimpado !== 'string') return
        if(this.cpfLimpado.length !== 11) return
        if(this.veRepeticao()) return
        
        const cpfArg = this.cpfLimpado
        const cpfCortado = cpfArg.slice(0, -2)
        const digito1 = this.comparaDigito(cpfCortado)
        const digito2 = this.comparaDigito(cpfCortado + digito1)
        const cpfCompleto = cpfCortado + digito1 + digito2

        if(cpfCompleto === this.cpfLimpado) {
           return console.log('DEU CERTO!')
        }
    }

    comparaDigito(cpfCortado) { 
        const cpfArray = Array.from(cpfCortado)
        let regressiva = cpfCortado.length + 1

        const total = cpfArray.reduce((acml, nCPF) => {
            acml += (Number(nCPF) * regressiva)
            regressiva--
            return acml
        }, 0)

        const digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito)
    }

    veRepeticao() {
        return this.cpfLimpado[0].repeat(this.cpfLimpado.length) === this.cpfLimpado
    }
}

const cpf1 = new validadorCPF('482-085-428-30')
cpf1.segurancaCPF()



