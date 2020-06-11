 /*responsible for generating an eateries HTML represenations and putting in the browswer */

 const eateriesList = (eateriesCollection) => {

    for (const currentEateriesObject of eateriesCollection) {
   const eateriesHTML = eateriesConverter(currentEateriesObject) 


   const eateriesArticleElement = document.querySelector("#eateries_dropdown")

   eateriesArticleElement.innerHTML += eateriesHTML
   }
}   



//Event Listener - Used to listen to user's choice of eatery and use choice to populate itinerary preview

const eateryDropdownBox = document.querySelector("#eateries_dropdown")

eateryDropdownBox.addEventListener("change", (clickEvent) => {
    // Get the value of the eatery chosen by the user
    const eateryUserChoice = clickEvent.target.value

    console.log(eateryUserChoice)

    return eateryUserChoice
    
} )  