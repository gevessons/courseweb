// Funcao sem retorno
function imprimirSona(a, b){
    console.log(a + b)
}

imprimirSona(2, 3)


// Funcao com retorno

function soma (a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())