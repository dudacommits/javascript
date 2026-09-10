const myPromise = new Promise((resolve, reject) => {

    const nome = "duda"

    if (nome === "duda") {
        resolve('usuario duda encontrada!')
    } else {
        reject('usuario duda nao foi encontrada!')
    }
})

myPromise.then((data) => {
    console.log(data)
})

// encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {

    const nome = "duda"

    if (nome === "duda") {
        resolve('usuario duda encontrada!')
    } else {
        reject('usuario duda nao foi encontrada!')
    }
})

myPromise2.then((data) => {
    return data.toLowerCase()
})
.then((stringModificada) => {
    console.log(stringModificada)
})

//tratando o reject

const myPromise3 = new Promise((resolve, reject) => {

    const nome = "bruna"

    if (nome === "duda") {
        resolve('usuario duda encontrada!')
    } else {
        reject('usuario duda nao foi encontrada!')
    }
})

myPromise3.catch((err) => {
    console.log('aconteceu um erro: ' + err)
})

//resolver varias promessas com all

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 ok!')
    }, 2000)
    
})

const p2 = new Promise((resolve, reject) => {
    resolve('p2 ok!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('p3 ok!')
})

const resolvAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

console.log('depois do all')

// varias promessas com race

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p4 ok!')
    }, 2000)
    
})

const p5 = new Promise((resolve, reject) => {
    resolve('p5 ok!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('p6 ok!')
})

const resolvAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})

// fetch

// fetch('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => 
//     response.json()
// ).then((data) => {
//     console.log(data)
// })

async function buscarPokemon(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) 

        const data = await response.json()

        const pokeInfo = {
            nome: data.name,
            id: data.id,
            altura: data.height
        }

        console.log("daods do pokemon:", pokeInfo)
    } catch (error) {
        console.error("erro ao buscar o pokemon: ", error)
    }
}

buscarPokemon('bulbasaur')