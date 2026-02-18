
export default class ValidaCPF {
    constructor(CPF) {
        Object.defineProperty(this, 'cpfLIMPADO', {
            get() {
                return CPF.replace(/\D+/g, '')
            }
        })
    }

    valida() {
        if (typeof this.cpfLIMPADO === 'undefined') return console.log('Informe um CPF')
        if (this.cpfLIMPADO.length !== 11) return console.log('CPF NÃO EXISTE')
        if (this.sequencial()) return console.log('CPF FAKE')

        const cpfSeparado = this.cpfLIMPADO.slice(0, -2)
        const dig1 = this.pegaDigito(cpfSeparado)
        const dig2 = this.pegaDigito(cpfSeparado + dig1)
        const cpfCOMPLETO = cpfSeparado + dig1 + dig2

        return cpfCOMPLETO === this.cpfLIMPADO
    }

    static pegaDigito(cpfSeparado) {
        const arrayCPF = Array.from(cpfSeparado)
        let multiplica = arrayCPF.length + 1
        const total = arrayCPF.reduce((acml, nCPF) => {
            acml += (Number(nCPF) * multiplica)
            multiplica--
            return acml
        }, 0)

        const digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito)
    }

    sequencial() {
       return this.cpfLIMPADO[0].repeat(this.cpfLIMPADO.length) === this.cpfLIMPADO
    }

}
