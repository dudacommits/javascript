function primeiraFuncao(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("esperou isso aqui!")
            resolve()
        }, 2000)
    }) 
}

async function segundaFuncao() {
    console.log('iniciou')

    await primeiraFuncao()

    console.log('terminou')
}

// pratica

function 