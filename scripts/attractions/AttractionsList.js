
const attractionList = (attractionCollection) => {

    for (const attractionData of attractionCollection) {
        
        const attractionHTML = attractionConverter(attractionData)

        const attractionArticleElement = document.querySelector("#attractions_dropdown")

        attractionArticleElement.innerHTML += attractionHTML
    }
}

const attractionDropdownBox = document.querySelector("#attractions_dropdown")

attractionDropdownBox.addEventListener("change", (clickEvent) => {
    let attractionUserChoice = clickEvent.target.value
    
    console.log(attractionUserChoice)

    return attractionUserChoice
})