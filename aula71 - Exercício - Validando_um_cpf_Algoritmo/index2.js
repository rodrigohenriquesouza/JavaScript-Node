// 705.484.450-52 070.987.720-03      482.085.428.30
/* 
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o numero digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11  10 9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9 consideramos 0.
*/

function ValidarCPF(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpf.replace(/\D+/g, '')
        }
    })
}   

ValidarCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.eSequencia()) return false

    const cpfCortado = this.cpfLimpo.slice(0, -2)
    const digito1 = this.comparaDigito(cpfCortado)
    const digito2 = this.comparaDigito(cpfCortado + digito1)
    const cpfCompleto = cpfCortado + digito1 + digito2

    return cpfCompleto === this.cpfLimpo
}

ValidarCPF.prototype.eSequencia = function() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo
}

ValidarCPF.prototype.comparaDigito = function(cpfCortado) {
    const arrayCPF = Array.from(cpfCortado)
    let multiplicaRegressivo = arrayCPF.length + 1
    const total = arrayCPF.reduce((acml, valor) => {
        acml += (multiplicaRegressivo * Number(valor))
        multiplicaRegressivo--
        return acml
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9? '0': String(digito)
}

const cpf = new ValidarCPF('482.085.428.30')

if(cpf.valida()) {
    console.log('VALIDO')
} else {
    console.log('CPF INVALIDO')
}

