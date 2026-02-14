document.addEventListener('click', e => {
  const el = e.target
  const tag = el.tagName.toLowerCase()

  if(tag === 'a') {
    e.preventDefault()
    carregaPagina(el)
  }
})

async function carregaPagina(el) {

  try {
    const link = el.getAttribute('href')
    const ajax = await fetch(link)
    if(ajax.status !== 200) throw new Error('status esta ruim')

   const conteudoLink = await ajax.text()
   mostraConteudo(conteudoLink)
  } catch(e) {
    console.warn(e)
  }
}

function mostraConteudo(conteudo) {
  const divResultado = document.querySelector('.resultado')
  divResultado.innerHTML = conteudo
}