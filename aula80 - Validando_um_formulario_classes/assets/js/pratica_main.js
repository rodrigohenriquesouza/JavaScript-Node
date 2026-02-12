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
        const inputsValidados = this.inputsValids()
        const senhasValidadas = this.passwordValids()

        if(inputsValidados && senhasValidadas) {
            alert('Formulario feito sozinho enviado!')
            this.formulario.submit()
        }
    }

    passwordValids() {
        let valid = true

        const senha = document.querySelector('.senha')
        const repeteSenha = document.querySelector('.repetir-senha')

        if(senha.length !== repeteSenha.length) {
            this.throwError(senha, 'As senhas devem ser iguais!')
            this.throwError(repeteSenha, 'As senhas devem ser iguais!')
            valid = false
        }

        if(senha.length < 6 || senha.length > 12) {
            this.throwError(senha, 'Deve ter de 6 a 12 caracteres')
            valid = false
        }
        return valid
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
    return valid
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
        return valid
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