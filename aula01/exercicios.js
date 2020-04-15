// Dado um vetor de numeros, como poderia ser realizada a soma de todos os valores utilizando reduce

const vet = [1, 2, 3, 4, 5, 5, 2, 2]

const somar = (a, b) => a + b

console.log(vet.reduce(somar))

// Dado um vetor de numeros, como poderia ser realizada a soma de todos os valores pares utilizando filter e reduce

const pares = a => a % 2 === 0

console.log(vet.filter(pares).reduce(somar))

// E impares

const impares = a => a % 2 !== 0

console.log(vet.filter(impares).reduce(somar))

// Dado um vetor de valores, retorne um objeto com quantas vezes cada valor esta presente no vetor (dica: utilize reduce)

const qtd = (agg, val) => {
    if(!agg[val]) { // truthy
        agg[val] = 0
        }
    agg[val] = agg[val] + 1
    return agg
}

console.log(vet.reduce(qtd, {}))

// Dado um vetor de valores, retorne um vetor com somente os valores unicos do vetor

const qtd2 = (agg, val) => {
    if(!agg[val]) { // truthy
        agg[val] = {
            value: val, 
            occur: 0
        }
    }
    agg[val].occur = agg[val].occur + 1
    return agg
}

const contagem = vet.reduce(qtd2, {})
const keys = Object.keys(contagem)
const unique = keys.filter( key => contagem[key].occur === 1 )
const uniqueValues = unique.map( val => contagem[val].value )
console.log(uniqueValues)

// Dado um vetor com numeros, retorne somente os numeros pares

console.log(vet.filter(pares))

// E somente impares

console.log(vet.filter(impares))

// Uma funcao eh chamada da seguinte forma:
// calculadora(10, '+', 20)
// Crie o corpo da funcao de forma que ela realize as 4 operacoes aritmeticas

const calculadora = function(a, op, b) {
    if(op === '+') {
        res = a + b
    } else if(op === '-') {
        res = a - b
    } else if(op === '/') {
        res = a / b
    } else if(op === '*') {
        res = a * b
    }
       
    return res
}

console.log(calculadora(10, '+', 20))
console.log(calculadora(10, '-', 20))
console.log(calculadora(10, '*', 20))
console.log(calculadora(10, '/', 20))

// Modifique a calculadora do ex anterior para que ela receba 2 numeros e uma funcao, e realize o calculo

const soma = (a, b) => a + b
const sub = (a, b) => a - b
const multi = (a, b) => a * b
const divi = (a, b) => a / b

const calculadoraFn = (a, op, b) => op(a, b) 

console.log(calculadoraFn(10, soma, 20))
console.log(calculadoraFn(10, sub, 20))
console.log(calculadoraFn(10, multi, 20))
console.log(calculadoraFn(10, divi, 20))