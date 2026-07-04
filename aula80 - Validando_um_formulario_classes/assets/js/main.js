class ValidaForm {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
    this.formulario.addEventListener('submit', e => {
        this.handleSubmit(e)
    })
    }
    handleSubmit(evento) {
        evento.preventDefault()
       const checkField =  this.checkField()
       const validPassword = this.validPasswords()

       if(checkField && validPassword) {
        alert('form enviado')
        this.formulario.submit()
       }
    }

    validPasswords() {
        let valid = true
        
        const password = this.formulario.querySelector('.senha')
        const repeatPassword = this.formulario.querySelector('.repet-senha')

        if(password.value !== repeatPassword.value) {
            this.textErro(password, 'Campos senha e repetir senha precisam ser iguais')
            this.textErro(repeatPassword, 'Campos senha e repetir senha precisam ser iguais')
            valid = false
        }

        if(password.value.length < 6 || password.value.length > 12) {
            this.textErro(password, 'Senha precisa estar entre 6 a 12 caracteres')
            valid = false
        }

        return valid
    }

    checkField() {
        let valid = true

        for(let erroText of this.formulario.querySelectorAll('.msg-erro')) {
            erroText.remove()
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText

            if(!campo.value) {
                this.textErro(campo, `${label} Não pode estar em branco`)
                valid = false
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false
            }
        }
        return valid
    }

    validaUsuario(campo) {
        const usuario = campo.value
        let valid = true
        if(usuario.length < 3 || usuario.length > 12) {
            this.textErro(campo, 'Usuário precisa ter entre 3 á 12 caracteres')
            valid = false
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.textErro(campo, 'Nome de usuário deverá conter apenas letras ou números')
            valid = false
        }
        return valid
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value)

        if(!cpf.valida()) {
            this.textErro(campo, 'CPF INVÁLIDO')
            return false
        }

        return true
    }

    textErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('msg-erro')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaForm()