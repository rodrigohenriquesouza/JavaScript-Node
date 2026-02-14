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
  } catch(erro) {

  }

}