function Calculadora () {
    const Display = document.querySelector('.display')

    this.inicia = () => {
        this.botoesCalcu()  
        this.pressionaEnter()
    }

    this.botoesCalcu = () => {
        document.addEventListener('click',  (e) => {
            const el = e.target

            if(el.classList.contains('btn-num')) {
                this.valorDisplay(el.innerText)
            }
            if(el.classList.contains('btn-del')) {
                this.apagarUm()
            }
            if(el.classList.contains('btn-clear')) {
                this.limparConta()
            }
            if(el.classList.contains('btn-eq')) {
                this.fazerConta()
            }
        })
     }

     Display.addEventListener('keyup', (e) => {
        if(e.keyCode === 13) {
            this.fazerConta()
        }
     })

     this.fazerConta() = () => {
        let conta = Display.value

        try {
            conta = eval(conta)

            if(!conta) {
                return 'Conta inválida'
            }
        } catch (erro) {
            return 'Conta inválida'
        }

        conta = Display.value
     }

     this.valorDisplay() = (valor) => {
        Display.value += valor
     }

     this.apagarUm() = () => {
        Display.value = Display.value.slice(0, -1)
     }

     this.limparConta() = () => {
        Display.value = ''
     }

}

const calculadora = new Calculadora()

calculadora.inicia()
