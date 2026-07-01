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
    }
    checkField() {
        let valid = true
    }
}

const valida = new ValidaForm()