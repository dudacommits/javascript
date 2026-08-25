let numeros = [1,5,10]
let soma = numeros.reduce((acumulador,atual) => {
    let total = acumulador + atual

    return total
})

console.log(soma)