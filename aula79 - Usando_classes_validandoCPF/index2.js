class ValidadorCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cleamCPF', {
            get() {
                return cpf.replace(/\D+/g, '')
            }
        })
    }

    valida() {
        if (typeof this.cleamCPF !== 'string') return console.log('INFORME UM CPF')
        if (this.cleamCPF.length !== 11) return console.log('CPF NÃO EXISTE')
        if (this.sequencial()) return console.log('CPF FAKE') 

        const cpfSemDigitos = this.cleamCPF.slice(0, -2)
        const digito1 = ValidadorCPF.pegaDigitos(cpfSemDigitos)
        const digito2 = ValidadorCPF.pegaDigitos(cpfSemDigitos + digito1)
        this.novoCPF = cpfSemDigitos + digito1 + digito2

        return this.novoCPF === this.cleamCPF
    }

    static pegaDigitos(cpfSemDigitos) {
        let total = 0
        let reverso = cpfSemDigitos.length + 1

        for(let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica)
            reverso--
        }

        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
    }

    sequencial() {
        return this.cleamCPF.charAt(0).repeat(11) === this.cleamCPF
    }
}

const CPF = new ValidadorCPF('482.085.428.30')

if (CPF.valida()) {
    console.log('CPF VALIDO')
} else {
    console.log('CPF INVALIDO')
}