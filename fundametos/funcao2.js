//Armazenando uma função em uma variavel
const imprimirSona = function (a, b) {
    console.log(a + b)
}

imprimirSona(2, 3)

// Armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito

const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))
