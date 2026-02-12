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
        const validaSenha
    }

    inputsValids() {
        let valid = true

       for(let errorText of this.formulario.querySelectorAll('.text-error')) {
        errorText.remove()
       }

        for(let input of this.formulario.querySelectorAll('.validar')) {
            const label = input.previousElementSibling.innerText

            if(!input.value) {
                valid = false
                this.throwError(input, `O ${label} precisa ser preenchido!.`)
            }

            if(input.classList.contains('cpf')) {
                if(!this.validaCPF(input)) valid = false
        }   

            if(input.classList.contains('usuario')) {
                if(!this.validUser(input)) valid = false
            }
    }
}

    validUser(input) {
        let valid = true
        if(input.value.length < 3 || input.value.length > 12) {
            this.throwError(input, 'Usuário deve conter de 3 a 12 caracteres') 
            valid = false
        }
        if(!input.value.match(/^[a-zA-Z0-9]+$/)) {
            this.throwError(input, 'Usuário deve conter apenas letras e/ou numeros')
            valid = false
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