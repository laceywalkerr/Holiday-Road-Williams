
const weatherList = (response) => {
    console.log(weatherCollection)

    for (const currentweatherObject of response.list) {

        const weatherHTML = weatherConverter(currentweatherObject)

        const weatherArticleElement = document.querySelector(".itineraryPreview_weatherDetails")

        weatherArticleElement.innerHTML += weatherHTML

    }
}