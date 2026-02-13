class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfCleam', {
            get() {
                return cpf.replace(/\D+/g, '')
            }
        })
    }

    valid() {
        const cpfSlice = this.cpfCleam.slice(0, -2)
        const digito1  = this.takeDigits(cpfSlice) 
        const digito2 = this.takeDigits(cpfSlice + digito1)
    }

    takeDigits(cpfSlice) {
        let total = 0
        let regressive = 0

        for(let dig of cpfSlice) {

        }
    }
}

const cpf = new ValidaCPF()