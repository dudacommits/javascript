const pokeName = document.querySelector('.pokemon-name')
const pokeNumber = document.querySelector('.pokemon-number')
const pokeImage = document.querySelector('.pokemon-img')

const form = document.querySelector('.form')
const input = document.querySelector('#input-search')




const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)

    if (APIResponse.status === 200){
        const data = await APIResponse.json()

        return data
    } 

}

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon)

    pokeName.innerHTML = data.name
    pokeNumber.innerHTML = data.id
    pokeImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

    input.value = ''

}

form.addEventListener ('submit', (event) => {
    event.preventDefault()

    renderPokemon(input.value)
    
})