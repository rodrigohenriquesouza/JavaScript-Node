// criar uma conta num banco

function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.depositar = function(quantia) {
    this.saldo += quantia
    this.verSaldo()
}

Conta.prototype.sacar = function(quantia) {
    if (this.saldo < quantia) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }
    this.saldo -= quantia
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(`Agencia/Conta: ${this.agencia}/${this.conta}` + ` Saldo:R$${this.saldo.toFixed(2)}`)
}

const conta1 = new Conta(11, 22, 10) 

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = Conta

ContaCorrente.prototype.depositar = function(quantia) {
    this.saldo += quantia
    this.verSaldo()
}

ContaCorrente.prototype.sacar = function(quantia) {
    if (quantia > (this.saldo + this.limite)) {
        console.log(`Saldo insifuciente: ${this.saldo}`)
        return
    }

    this.saldo -= quantia
    this.verSaldo()
}

const contaCorrente = new ContaCorrente(11, 22, 0, 300)

contaCorrente.sacar(299)

