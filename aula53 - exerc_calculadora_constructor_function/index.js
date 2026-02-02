function Calculadora () {
    const Display = document.querySelector('.display')

    this.inicia = function () {
        this.botoesCalcu()
    }

    this.botoesCalcu = function () {
        document.addEventListener('click', function (e) {
            const el = e.target

            if(el.classList.contains('btn-num')) {
                valorDisplay(el.innerText)
            }
        })
     }

     this.valor() = function valorDisplay(valor) {
        Display.value += valor
     }

}

Calculadora.inicia()

