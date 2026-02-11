// algoritmo validador de CPF 
// formula 11 - (total % 11)

class ValidaCPF {
    constructor(CPF) {
        Object.defineProperty(this, 'cpfLIMPADO', {
            get() {
                return CPF.replace(/\D+/g, '')
            }
        })
    }

    valida() {
        if (typeof this.cpfLIMPADO === 'undefined') return 
        if (this.cpfLIMPADO.length > 11) return 
        if (this.sequencial()) return

        const cpfSeparado = this.cpfLIMPADO.slice(0, -2)
        const dig1 = this.pegaDigito(cpfSeparado)
        const dig2 = this.pegaDigito(cpfSeparado + dig1)
        const cpfCOMPLETO = cpfSeparado + dig1 + dig2

        this.cpfLIMPADO === cpfCOMPLETO
    }

    pegaDigito(cpfSeparado) {
        const arrayCPF = Array.from(cpfSeparado)
        let multiplica = arrayCPF.length + 1
        const total = arrayCPF.reduce((acml, nCPF) => {
            acml += (Number(nCPF) * multiplica)
            multiplica--
        }, 0)

        const digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito)
    }

    sequencial() {
       return this.cpfLIMPADO[0].repeat(this.cpfLIMPADO.length) === this.cpfLIMPADO
    }

}
const cpf = new ValidaCPF('482.085.428.30')

