fetch('pessoas.json')
then(resposta => resposta.json())
then(json => carregaJsonNaPag(json))

