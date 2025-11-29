
function meuEscopo() {

    const form = document.querySelector('.form')
    const pessoas = []
    const res = document.querySelector('.res')


function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const lutas = form.querySelector('.lutas')
    const vitorias = form.querySelector('.vitorias')
    const derrotas = form .querySelector('.derrotas')

    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        lutas: lutas.value,
        vitorias: vitorias.value,
        derrotas: derrotas.value
    })

    console.log(pessoas)

    res.innerHTML += `<p>Nome: ${nome.value} Sobrenome: ${sobrenome.value}</p>` + `<p>Lutas: ${lutas.value}</p>` + `<p>Vitorias: ${vitorias.value} Derrotas: ${derrotas.value}</p>`
};

    form.addEventListener('submit', recebeEventoForm)

}

meuEscopo()

