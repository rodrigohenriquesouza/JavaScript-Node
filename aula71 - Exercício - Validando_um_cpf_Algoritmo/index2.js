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
}

const CPF = new ValidarCPF('4004.48948.1234')
CPF.validar()