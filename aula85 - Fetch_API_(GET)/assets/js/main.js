document.addEventListener('click', e => {
  const elemento = e.target
  const tag = elemento.tagName.toLowerCase()

  if(tag === 'a') {
    e.preventDefault()
    paginaCarregada(elemento)
  }
})

async function paginaCarregada(elemento) {

  try {
     const href = elemento.getAttribute('href')
     const conteudoHREF = await fetch(href)

    if(conteudoHREF.status !== 200) throw new Error('Carregamento muito lento')

     const textoHREF = await conteudoHREF.text()
     mostraTexto(textoHREF)
  } catch (erro) {
    console.warn(erro)
  }

}

function mostraTexto(textoHREF) {
  const res = document.querySelector('.resultado')
  res.innerHTML = textoHREF
}