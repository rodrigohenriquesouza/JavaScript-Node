
document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAtributte('href')
    const response = await fetch(href)
    if(response.status !== 200) throw new Error('ERROR NO ACESSO')

    const html = await response.text()
    carregaResultado(html)
    
  } catch(e) {
    console.warn(e)
  }
}
function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}

