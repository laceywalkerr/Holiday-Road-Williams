
const weatherList = (response) => {
    console.log(weatherCollection)

    for (const currentweatherObject of response) {

        const weatherHTML = weatherConverter(currentNationalParksObject)

        const weatherArticleElement = document.querySelector("#weather_dropdown")

        weatherArticleElement.innerHTML += weatherHTML

    }
}
