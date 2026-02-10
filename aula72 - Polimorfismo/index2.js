function Conta(agencia, nConta, saldo) {
    this.agencia = agencia
    this.nConta = nConta
    this.saldo = saldo
}

Conta.prototype.depositar = function(quantiaDepositada) {
    this.saldo += quantiaDepositada
    this.verSaldo()
}

Conta.prototype.sacar = function(quantiaParaSacar) {
    if(typeof quantiaParaSacar !== 'number') return console.log('Digite um numero para sacar')
    if(quantiaParaSacar > this.saldo) return console.log(`Saldo insuficiente, você tem: R$${this.saldo}`)
    this.saldo -= quantiaParaSacar
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    return console.log(`AG/CONTA: ${this.agencia} / ${this.nConta}`) + console.log(`Saldo atual:R$${this.saldo}`)
}

function ContaP(agencia, nConta, saldo) {
    Conta.call(this, agencia, nConta, saldo)
}

ContaP.prototype = Object.create(Conta.prototype)
ContaP.prototype.constructor = ContaP

function ContaC(agencia, nConta, saldo, limite) {
    Conta.call(this, agencia, nConta, saldo)
    this.limite = limite
}

ContaC.prototype = Object.create(Conta.prototype)
ContaC.prototype.constructor = ContaC

ContaC.prototype.depositar = function(qtDepositada) {
    this.saldo += qtDepositada
    verSaldo()
}

ContaC.prototype.sacar = function(qtParaSacar) {
    
}

const conta = new Conta(5, 15, 30)
const contaP = new ContaP(10, 20, 100)



