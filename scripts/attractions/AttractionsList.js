
const attractionList = (attractionCollection) => {

    for (const attractionData of attractionCollection) {
        
        const attractionHTML = attractionConverter(attractionData)

        const attractionArticleElement = document.querySelector("#attractions_dropdown")

        attractionArticleElement.innerHTML += attractionHTML
    }
}

const attractionDropdownBox = document.querySelector("#attractions_dropdown")

attractionDropdownBox.addEventListener("change", (clickEvent) => {
    const attractionName = clickEvent.target.value
    const attractionParagraphElement = document.querySelector(".attractionItineraryChoice")

    attractionParagraphElement.innerHTML += attractionName
    
    console.log(attractionUserChoice)

    return attractionUserChoice
})