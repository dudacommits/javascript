// variaveis e selecao de elementos
const apiKey = "4d7f2732e26e57df7e3299029798b479";
const apiCountryURL = "https://flagsapi.com/BE/flat/64.png"

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")
const weatherContainer = document.querySelector("#weather-data")

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const WeatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")


// funcoes

const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    return data
}

const showWeatherData = async (city) => {
const data = await getWeatherData(city)
console.log(data)

cityElement.innerHTML = data.name
tempElement.innerHTML = parseInt(data.main.temp)
descElement.innerHTML = data.weather[0].description
countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`)
WeatherIconElement.setAttribute("src", `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`)
humidityElement.innerHTML = `${data.main.humidity} %`
windElement.innerHTML = `${parseInt(data.wind.speed)} km/h`

weatherContainer.classList.remove("hide")
}

//eventos

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