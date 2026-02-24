class validadorCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpado', {
            get() {
                return cpf.replace(/\D+/g, '')
            }
        })
}

    veRepeticao() {
        return this.cpfLimpado[0].repeat(this.cpfLimpado.length) === this.cpfLimpado
    }
}

const cpf1 = new validadorCPF('482-085-428-30')

console.log(cpf1.veRepeticao())