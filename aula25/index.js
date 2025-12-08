// condicao ? 'valor para verdadeiro' : 'valor para falso'

const pontuacaoUsu = 2000 
const nivelUsu = pontuacaoUsu >= 1000 ? 'Usuário VIP' : 'Usuário Normal' 

const corUsuario = null
const corPadrao = corUsuario || 'Preta'

console.log(nivelUsu, corPadrao)

// if (pontuacaoUsu >= 1000) {
//     console.log('Usuário VIP')
// } else {
//     console.log('Usuário Normal')
// } 