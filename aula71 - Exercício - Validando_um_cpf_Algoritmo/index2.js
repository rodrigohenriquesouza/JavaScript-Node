function ValidarCPF(cpf) {
    Object.defineProperty(this, 'cpfPuro', {
        enumerable: true,
        get: function() {
            return cpf.replace(/\D+/g, '')  // pego o CPF "sujo" com varios pontos e acentos e traços e deixo apenas numeros
        }
    })
}

ValidarCPF.prototype.validar = function() {  // Valido meu CPF, busco erros
    if(typeof this.cpfPuro === 'undefined') return false // verficio se existe um CPF
    if(this.cpfPuro.length !== 11) return false // Verficio se tem 11 elementos para ser um CPF
    if(this.sequencial()) return false // Verifico se tem numeros na sequencia o que desvalida um CPF

    const cpfDiminuido = this.cpfPuro.slice(0, -2) // corto os 2 ultimos numeros do CPF
    const primeiroDigito = this.pegaDigito(cpfDiminuido)  // pego o 1 digito que eu cortei e reutilizo uma função
    const segundoDigito = this.pegaDigito(cpfDiminuido + primeiroDigito) // pego o 2 digito e reutilizo a função a variavel do primeiroDigito
    const cpfValidado = cpfDiminuido + primeiroDigito + segundoDigito // concateno o cpf junto novamente com CPF CORTADO + DIG1 + DIG2

    return cpfValidado === this.cpfPuro   // comparo se os digitos que foram removidos e adicionados novamente são iguais ao que foi passado por parametro
}

ValidarCPF.prototype.pegaDigito = function(cpfDiminuido) {
    const cpfArray = Array.from(cpfDiminuido)  /// pega meu CPF cortado/diminuido e joga em um array transformando cada numero do CPF em um elemento dentro do array
    let multiplica = cpfArray.length + 1    // pego o tamanho do arry e adiciono mais um numero para fazer a formula que verifica o CPF
    const total = cpfArray.reduce((acl, numsCpf) => {  // me da o total da soma entre os numeros que sao para multiplicar e o valor dentro do cpfArray
        acl += (Number(numsCpf) * multiplica)
        multiplica--
        return acl
    }, 0)

    const digito = 11 - (total % 11)      // formula para verficar CPF
    return digito > 9? '0' : String(digito)   // returna o digito
}

ValidarCPF.prototype.sequencial = function() {
    return this.cpfPuro[0].repeat(this.cpfPuro.length) === this.cpfPuro  // verifica se o parametro passado tem numeros sequenciais
}

const CPF = new ValidarCPF('482.085.428;30')

if(CPF.validar()) {
    console.log('PARABÉNS CPF VALIDADO')
} else {
    console.log('CPF NÃO VALIDADO. ERRO DE DADOS')
}