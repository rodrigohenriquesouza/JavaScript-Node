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
        
        const cpfArg = this.cpfLimpado
        const cpfCortado = cpfArg.slice(0, -2)
        const digito1 = comparaDigito(cpfCortado)
        const digito2 = comparaDigito(cpfCortado + digito1)
    }

    criaDigito(cpfCortado) {
        
    }

    veRepeticao() {
        return this.cpfLimpado[0].repeat(this.cpfLimpado.length) === this.cpfLimpado
    }
}

const cpf1 = new validadorCPF('482-085-428-30')

console.log(cpf1.veRepeticao())