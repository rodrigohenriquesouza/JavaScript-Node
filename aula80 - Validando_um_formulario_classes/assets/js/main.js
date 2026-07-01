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
        console.log('Formulário não enviado')
    }
}

const valida = new ValidaForm()