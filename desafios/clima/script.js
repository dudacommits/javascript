// variaveis e selecao de elementos
const apiKey = "4d7f2732e26e57df7e3299029798b479";
const apiCountryURL = "https://flagsapi.com/BE/flat/64.png"

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")
const weatherContainer = document.querySelector("#weather-data")
const loading = document.querySelector("#loading")
const sujest = document.querySelector("#sujest")
const btnModal = document.querySelector("#btnModal")
const modal = document.querySelector("#modal")
const fadee = document.querySelector("#fadee")
const body = document.querySelector("body")
const descContainer = document.querySelector("#description-container")

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const WeatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const minTempElement = document.querySelector("#min-temp span")
const maxTempElement = document.querySelector("#max-temp span")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")


// funcoes

btnModal.addEventListener("click", errorMensage)

function errorMensage (){
    modal.classList.toggle("fechar")
    fadee.classList.toggle("fechar")
    console.log("fechou modal")
}

const getCities = async() => {
    const res = await fetch("cities.json")

    const cities = await res.json()

    return cities
}

const showRandomCity = async () => {

    const cities = await getCities()

    const random = Math.floor(Math.random() * cities.length)

    const city = cities[random]

    const p = document.createElement("p")

    p.innerHTML = city.name

    sujest.appendChild(p)

    p.addEventListener ("click", () => {
        cityInput.value = city.name
        showWeatherData(city.name)
    })

}

const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    return data
}

const showWeatherData = async (city) => {

    sujest.classList.add("hide")

    loading.classList.remove("hide")

    try{
        const data = await getWeatherData(city)

        loading.classList.add("hide")

        console.log(data)

        cityElement.innerHTML = data.name
        countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`)

        tempElement.innerHTML = `${parseInt(data.main.temp)}&deg;C`
        descElement.innerHTML = data.weather[0].description
        WeatherIconElement.setAttribute("src", `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`)

        maxTempElement.innerHTML = `${data.main.temp_max.toFixed(1)}&deg;C`
        minTempElement.innerHTML = `${data.main.temp_min.toFixed(1)}&deg;C`
        windElement.innerHTML = `${parseInt(data.wind.speed)}km/h`
        humidityElement.innerHTML = `${data.main.humidity}%`

        weatherContainer.classList.remove("hide")

        if (data.weather[0].icon.endsWith("n")) {
            body.classList.remove("default", "rain", "night")
            body.classList.add("night") 

            descContainer.classList.remove("default", "rain", "night")
            descContainer.classList.add("night") 

        } else if (data.weather[0].description === "nublado" || data.weather[0].description === "chuva moderada" || data.weather[0].description === "chuva leve"){

            body.classList.remove('default', 'rain', 'night')
            body.classList.add('rain')

            descContainer.classList.remove("default", "rain", "night")
            descContainer.classList.add("rain") 

        }else {
            body.classList.remove("default", "rain", "night")
        body.classList.add("default")

        descContainer.classList.remove("default", "rain", "night")
            descContainer.classList.add("default") 
        }

        } catch (error){
        errorMensage()
        }

    
}

//eventos

showRandomCity()
showRandomCity()
showRandomCity()
showRandomCity()

searchBtn.addEventListener ("click", (e) => {
    e.preventDefault()

    const city = cityInput.value

    showWeatherData(city)
})

cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter"){
        const city = e.target.value

        showWeatherData(city)
    }
})