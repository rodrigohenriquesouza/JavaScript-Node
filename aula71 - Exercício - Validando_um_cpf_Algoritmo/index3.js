// criar validador de CPF
// filtro o cpf passado
// vejo se repete numeros varias vezes

function VerificaCPF(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpf.replace(/\D+/g, '')
        }
    })
}

VerificaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.eSequencial()) return false

    const cpfReduzido = this.cpfLimpo.slice(0, -2)
    
    const digito1 = this.pegaDigitos(cpfReduzido)
    const digito2 = this.pegaDigitos(cpfReduzido + digito1)
    const cpfValidado = cpfReduzido + digito1 + digito2

    return cpfValidado === this.cpfLimpo
}

VerificaCPF.prototype.pegaDigitos = function(cpfReduzido) {
    const arrayCPF = Array.from(cpfReduzido)
    let multiplicador = arrayCPF.length + 1
    const total = arrayCPF.reduce((acml, numCPF) => {
        acml += (Number(numCPF) * multiplicador)
        multiplicador--
        return acml
    }, 0)
    const digitoValidado = 11 - (total % 11)
    return digitoValidado > 9 ? '0' : String(digitoValidado)
}

VerificaCPF.prototype.eSequencial = function() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo
}

const cpf = new VerificaCPF('994.950.660%34')

if(cpf.valida()) {
    console.log('CPF VALIDO')
} else {
    console.log('CPF INVALIDO')
}