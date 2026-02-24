class validadorCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpado', {
            get() {
                return cpf.replace(/\D+/g, '')
            }
        })
}

    veRepeticao()
}

const cpf1 = new validadorCPF('482085428.30')

console.log(cpf1.cpfLimpado)