// aula objeto date
// const tresHoras = 60 * 60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras - umDia)
//const data = new Date(2025, 3) // ano, mes, dia, hora, minuto, segundos, milisegundos
const data = new Date('2019-04-20 20:20:59')
console.log('Dia', data.getDate()) // Pega o dia do mês
console.log('Mês', data.getMonth() + 1) // Mês começa do zero
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('Ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0 - Domingo, 6 - Sábado
console.log(data.toString())
console.log(Date.now())