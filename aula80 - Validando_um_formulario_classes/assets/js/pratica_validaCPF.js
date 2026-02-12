class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            get() {
                return cpf.replace(/\D+/g, '')
            }
        })
    }
}

const cpf = new ValidaCPF()
