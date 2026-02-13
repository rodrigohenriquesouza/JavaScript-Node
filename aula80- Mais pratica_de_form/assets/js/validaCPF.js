class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfCleam', {
            get() {
                return cpf.replace(/\D+/g, '')
            }
        })
    }

    valid() {
        if(typeof this.cpfCleam !== 'string') return false
        if(this.cpfCleam.length !== 11) return false
        if(this.sequential()) return console.log(`CPF fake`)

        const cpfSlice = this.cpfCleam.slice(0, -2)
        const digito1  = this.takeDigits(cpfSlice) 
        const digito2 = this.takeDigits(cpfSlice + digito1)
        const cpfComplete = cpfSlice + digito1 + digito2

        return cpfComplete === this.cpfCleam
    }

    takeDigits(cpfSlice) {
        let total = 0
        let regressive = cpfSlice.length + 1

        for(let dig of cpfSlice) {
            total += Number(dig) * regressive
            regressive--
        }
        
        const dig = 11 - (total % 11)
        return dig > 9? '0' : String(dig)
    }

    sequential() {
        return this.cpfCleam[0].repeat(this.cpfCleam.length) === this.cpfCleam
    }
}

const cpf = new ValidaCPF()
