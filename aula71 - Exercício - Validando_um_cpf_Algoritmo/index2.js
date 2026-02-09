function ValidarCPF(cpf) {
    Object.defineProperty(this, 'cpfPuro', {
        enumerable: true,
        get: function() {
            return cpf.replace(/\D+/g, '')
        }
    })
}

ValidarCPF.prototype.validar = function() {
    if(typeof this.cpfPuro === 'undefined') return false
    if(this.cpfPuro.length !== 11) return false
    if(this.sequencial()) return false
}

ValidarCPF.prototype.sequencial = function() {
    return this.cpfPuro[0].repeat(this.cpfPuro.length) === this.cpfPuro
}

const CPF = new ValidarCPF('11111111111')
CPF.validar()