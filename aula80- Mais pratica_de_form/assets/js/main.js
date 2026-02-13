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

        const fieldsValid = this.fieldsValid()
    }

    fieldsValid() {
        
    }
}

const form = new Form()