class Form {
    constructor() {
        this.form = document.querySelector('.form')
        this.event()
    }

    event() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        const fielsdValid = this.fieldsValid()
    }

    fieldsValid() {
        let valid = true

        for(let msgError of document.querySelectorAll('.error-msg')) {
            msgError.remove()
        }

        for(let field of this.form.querySelectorAll('.valid')) {
            const label = field.previousElementSibling.innerText
            if(!field.value) {
                this.throwError(field, `O ${label} precisa ser preenchido`)
                valid = false
            }

            if(field.classList.contains('cpf')) {
                if(!this.validCPF(field)) {
                    this.throwError(field, 'CPF INVÁLIDO')
                    valid = false
                }
            }

        }
        return valid
    }

    validCPF(field) {

        const cpf = new ValidaCPF(field.value)
        if(!cpf.valid()) {
            return false
        }

        return true
    }

    throwError(field, message) {
        const messageError = document.createElement('div')
        messageError.innerHTML = message
        messageError.classList.add('error-msg')
        field.insertAdjacentElement('afterend', messageError)
    }
}

const form = new Form()