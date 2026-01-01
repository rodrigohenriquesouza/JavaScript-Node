const pilotos = {
    formula1: ['Max Verstappen', 'Lewis Hamilton'],
    formula1Antigos: ['Airton Senna', 'Piquet'],
    formulaTorcedores: ['Rodrigo', 'Gustavo', 'Thiago']
}

const { formula1: pilotosAtuais, formula1Antigos: pilotosAntigos, ...torcedores} = pilotos

console.log(pilotosAtuais, pilotosAntigos, torcedores)