
const attractionList = (attractionCollection) => {

    
    for (const attractionData of attractionCollection) {
        
        const attractionHTML = attractionConverter(attractionData)

        const attractionArticleElement = document.querySelector("#attractions_dropdown")

        attractionArticleElement.innerHTML += attractionHTML
    }
}