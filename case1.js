const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Notas máximas, parabéns!')
            break
        case 8: case 7:
            console.log('Aprovado, parabéns!')
            break
        case 6: case 5:
            console.log('Está de exame, boa sorte na proxima fase.')
            break
        case 4: case 3: case 2:
            console.log('O seu caso vai para conselho de classe, boa sorte.')
            break
        case 1: case 0:
            console.log('Você está reprovado! Estude mais no proximo semestre.')
            break
        default:
            console.log('Média de notas invalida.')
    }
}

imprimirResultado(6)