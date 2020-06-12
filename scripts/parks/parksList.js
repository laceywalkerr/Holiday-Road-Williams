  /* Responsible for creating a list of "quote HTML representations"
and showing them on the browser.. this creates the platform for the quoteshtmlrep to place its compiled quote object */ 

const nationalParksList = (response) => {
    console.log(nationalParksCollection)

    for (const currentNationalParksObject of response) {
        
        const nationalParksHTML = nationalParksConverter(currentNationalParksObject)

        const nationalParksArticleElement = document.querySelector("#nationalParks_dropdown")

        nationalParksArticleElement.innerHTML += nationalParksHTML

    }
}

//responsible for listening to a click on a National Park object from the National Parks Dropdown Box.
const npDropdownBox = document.querySelector("#nationalParks_dropdown")

npDropdownBox.addEventListener("change", (event) => {
const npName = event.target.value

const nationalParksParagrahElement = document.querySelector(".npUserChoice")
nationalParksParagrahElement.innerHTML = npName

const nationalParksDetailsElement = nationalParksDetails(nationalParksCollection, npName)


})


// //responsible for creating a list national park details to turn into an html "details" element and injected into our np itinerary previewer. 
const nationalParksDetails = (nationalParkResponse, npName) => {
    console.log(nationalParksCollection)

    for (const currentNationalParksDetailsObject of nationalParkResponse.data) {
        if (currentNationalParksDetailsObject.fullName === npName) {
            const nationalParksDetailsHTML = nationalParksConverter(currentNationalParksDetailsObject)

            const nationalParksDetailsElement = document.querySelector(".npButton")
            console.log(nationalParksDetailsHTML)
            nationalParksDetailsElement.innerHTML += nationalParksDetailsHTML
        }

    }
}





// //toggle button to hide the class (containing the data)
// const fishVisibilityButton = document.querySelector(".itineraryPreview_parksDetailButton")

// fishVisibilityButton.addEventListener("click", (clickEvent) => {


//     document.querySelector(".npButton").classList.toggle("hidden")
// })

// const nationalParkDetails = document.querySelector(".npUserChoice")

// nationalParkDetails.addEventListener("change", (event) => {
// const npName = event.target.value
// const nationalParksButtonElement = document.querySelector(".npUserChoice")
// nationalParksParagramElement.innerHTML = npName


// })
