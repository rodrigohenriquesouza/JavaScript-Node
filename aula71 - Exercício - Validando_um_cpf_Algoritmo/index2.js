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

    const cpfDiminuido = this.cpfPuro.slice(0, -2)
    const primeiroDigito = this.pegaDigito(cpfDiminuido)
    const segundoDigito = this.pegaDigito(cpfDiminuido + primeiroDigito)
    const cpfValidado = cpfDiminuido + primeiroDigito + segundoDigito

    return cpfValidado === this.cpfPuro
}

ValidarCPF.prototype.pegaDigito = function(cpfDiminuido) {
    const cpfArray = Array.from(cpfDiminuido)
    let multiplica = cpfArray.length + 1
    const total = cpfArray.reduce((acl, numsCpf) => {
        acl += (Number(numsCpf) * multiplica)
        multiplica--
        return acl
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9? '0' : String(digito)
}

ValidarCPF.prototype.sequencial = function() {
    return this.cpfPuro[0].repeat(this.cpfPuro.length) === this.cpfPuro
}

const CPF = new ValidarCPF('482.085.428;30')

if(CPF.validar()) {
    console.log('PARABÉNS CPF VALIDADO')
} else {
    console.log('CPF NÃO VALIDADO. ERRO DE DADOS')
}