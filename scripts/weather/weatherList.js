
const weatherList = (response) => {
    console.log(weatherCollection)

    for (const currentweatherObject of response) {

        const weatherHTML = weatherConverter(currentweatherObject)

        const weatherArticleElement = document.querySelector("#weather_dropdown")

        weatherArticleElement.innerHTML += weatherHTML

    }
}
