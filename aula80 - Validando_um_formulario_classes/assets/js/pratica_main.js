class ValidaForm {
    constructor() {
        this.formulario = document.querySelector('.form')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const validaInputs = this.inputsValids()
    }

    inputsValids() {
        let valid = true

       

        for(let input of this.formulario.querySelectorAll('.validar')) {
            const label = input.previousElementSibling.innerText

            if(!input.value) {
                valid = false
                this.throwError(input, `O ${label} precisa ser preenchido!.`)
            }

            if(input.classList.contains('cpf')) {
                if(!this.validaCPF(input)) valid = false
        }   
    }
}

    validaCPF(input) {
        const cpf = new ValidaCPF(input.value)

        if(!cpf.valida()) {
            this.throwError(input, 'CPF inválido')
            return false
        }
        return true
    }

    throwError(input, msg) {
        const divMsg = document.createElement('div')
        divMsg.innerHTML = msg
        divMsg.classList.add('text-error')
        input.insertAdjacentElement('afterend', divMsg)
    }
}

const form = new ValidaForm()