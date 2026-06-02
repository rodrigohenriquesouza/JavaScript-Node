// refazer exercicio validar CPF

class validaUmCpf {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            configurable: false,
            enumerable:false
            value: cpf.replace(/\D+/g, '')
        })
    }
}

const validaCpf = new validaUmCpf('482.085.428.30')