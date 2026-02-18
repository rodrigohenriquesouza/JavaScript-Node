/* import * as meuModulo from './modulo1'

console.log(meuModulo)
const nome = 'Miranda' */

import Pes, { nome, sobrenome, idade} from './modulo1'
const p1 = new Pes(nome, sobrenome)
console.log(p1)
console.log(nome, sobrenome, idade)

