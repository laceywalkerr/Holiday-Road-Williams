 /*responsible for generating an eateries HTML represenations and putting in the browswer */

 const eateriesList = (eateriesCollection) => {

    for (const currentEateriesObject of eateriesCollection) {
   const eateriesHTML = eateriesConverter(currentEateriesObject) 


   const eateriesArticleElement = document.querySelector("#eateries_dropdown")

   eateriesArticleElement.innerHTML += eateriesHTML
   }
}   



//Event Listener - Used to listen to user's choice of eatery and use choice to populate itinerary preview



const eateriesDropdownBox = document.querySelector("#eateries_dropdown")

eateriesDropdownBox.addEventListener("change", (clickEvent) => {
    
    // Get the value of the eatery chosen by the user
    const eateriesUserChoice = clickEvent.target.value

    const eateriesParagraphElement = document.querySelector(".eateriesItineraryChoice")

    eateriesParagraphElement.innerHTML = eateriesUserChoice
    
} )  



//Event listener - for details dialog - used to listen to eateries_dropdown and pull description from API

// const nationalParksDetails = (nationalParkResponse, npName) => {
//     console.log(nationalParksCollection)

//     for (const currentNationalParksDetailsObject of nationalParkResponse.data) {
//         if (currentNationalParksDetailsObject.fullName === npName) {
//             const nationalParksDetailsHTML = nationalParksConverter(currentNationalParksDetailsObject)

//             const nationalParksDetailsElement = document.querySelector(".npButton")
//             console.log(nationalParksDetailsHTML)
//             nationalParksDetailsElement.innerHTML += nationalParksDetailsHTML
//         }

//     }
// }



const eateriesDetails = (eateriesResponse, eateriesUserChoice) => {
    console.log(eateriesCollection)

    for (const eateriesDetailsObject of eateriesResponse) {
        if (eateriesDetailsObject.businessName === eateriesUserChoice) {
            const eateriesDetailsHTML = eateriesDetailsConverter(currentEateriesDetailsObject)

            const eateriesDetailsElement = document.querySelector(".itineraryPreview_eateriesDetails")
            console.log(eateriesDetailsHTML)
            eateriesDetailsElement.innerHTML += eateriesDetailsHTML
        }

    }

}
    