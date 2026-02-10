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



