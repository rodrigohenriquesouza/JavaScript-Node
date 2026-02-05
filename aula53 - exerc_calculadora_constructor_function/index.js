function Calculadora () {
    this.display = document.querySelector('.display')
    this.inicia = () => {
        this.botoesCalcu()  
        this.pressionaEnter()
    }

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode !== 13) return
            this.fazerConta()
        })
    }

    this.botoesCalcu = () => {
        document.addEventListener('click', e => {
            const el = e.target

            if(el.classList.contains('btn-num'))  this.valorDisplay(el.innerText)
            if(el.classList.contains('btn-del'))  this.apagarUm()
            if(el.classList.contains('btn-clear'))  this.limparConta()
            if(el.classList.contains('btn-eq'))  this.fazerConta()
        })
     }

     this.fazerConta = () => {
        try {

        const conta = eval(this.display.value)
            if(Number.isNaN(conta)) {
                return alert('Conta inválida')
            }

            this.display.value = conta

        } catch (erro) {
            return alert('Conta inválida')
        }
     }

     this.valorDisplay = valor => {
        this.display.value += valor
        this.display.focus()
    }
     this.apagarUm = () => this.display.value = this.display.value.slice(0, -1)
     this.limparConta = () => this.display.value = ''

}

const calculadora = new Calculadora()
calculadora.inicia()
