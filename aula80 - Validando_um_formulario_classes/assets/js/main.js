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

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            console.log(campo)
        }
    }
}

const valida = new ValidaForm()