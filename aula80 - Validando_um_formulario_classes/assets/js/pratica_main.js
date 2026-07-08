class ValidaForm {
    constructor() {
        this.formulario = document.querySelector('.form')
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            e.preventDefault()
        })
        this.handleEvent()
    }


}