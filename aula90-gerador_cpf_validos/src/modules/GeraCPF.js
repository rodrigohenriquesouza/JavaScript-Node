import ValidadorCPF from './ValidaCPF'

export default class GeraCPF {

    geraNum(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) - min))
    }

    formataCPF(cpf) {
        return(
        cpf.slice(0, 3) + '.' +
        cpf.slice(3, 6) + '.' +
        cpf.slice(6, 9) + '-' +
        cpf.slice(9, 11)
        )
    }

    geraCPF() {
        const cpfCortado = this.geraNum()
        const digito1 = ValidadorCPF.pegaDigito(cpfCortado)
        const digito2 = ValidadorCPF.pegaDigito(cpfCortado + digito1)
        const cpfCOMPLETO = cpfCortado + digito1 + digito2
        return this.formataCPF(cpfCOMPLETO)
    }
}