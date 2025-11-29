function escopoCodigo() {

    const form = document.querySelector('.form')
    


    function recebeEventoForm(evento) {
     evento.preventDefault();

        const peso = form.querySelector('#peso')
        const altura = form.querySelector('#altura')
        let imc = peso.value / (altura.value * altura.value)
        console.log(imc)
    };
    form.addEventListener('submit', recebeEventoForm)
}

escopoCodigo()