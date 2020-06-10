/* Responsible for creating a list of "quote HTML representations"
and showing them on the browser.. this creates the platform for the quoteshtmlrep to place its compiled quote object */ 

const nationalParksList = (response) => {
    console.log(nationalParksCollection)

    for (const currentNationalParksObject of response) {

        const nationalParksHTML = nationalParksConverter(currentNationalParksObject)

        const nationalParksArticleElement = document.querySelector(".nationalParks_list")

        nationalParksArticleElement.innerHTML += nationalParksHTML

    }
}

// //responsible for listening to a click on button (located below the nav bar) to toggle quotes class
// const quotesVisibilityButton = document.querySelector(".toggleQuotes")

// quotesVisibilityButton.addEventListener("click", (clickEvent) => {


//     document.querySelector(".quotesList").classList.toggle("hidden")
// })