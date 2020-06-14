                                                // parksList.js  Handles: 
                                                //1. Loop for np dropdown box HTML Conversion and placement
                                                //2. Click Listener for NP dropdown
                                                //2a.  populate user selected (npName) in html itinerary preview section
                                                //2b.  addes user seleceted (npName) as a paramater of the (NParkDetails) objects.
                                                //populate user selected NP details in html details button in itinerary preview section 
                                                //3. Loop for np details on itinerary preview HTML conversion and placement

                                                //1. Loop for np HTML Conversion
// After the API's data is recieved, this function is invoked with the data as a paramater and then it runs the data through a for of loop.
// Responsible for creating the visual represntation (nPList) of every (national Park) object inside the (nationalParkDataResponse) paramater, which is placed in a for of loop to iterate through each item.
// (nPList) is declared as a function with the paramater "taco" of (nationalParkDataResponse), that taco (npDataResponse) is then put through a for of loop where every object is handled. 
// (nPList) is invoked with the API's data as a paramater in main.js, Inside of (getNationalParkData) function
//   1.- declare a variable and set it equal to the html represntation of a single object  
//   2.- then declare a variable and set it equal to the national parks dropdown with a "document query and selector" based on the id(#) or class(.) "national park dropdown".
//   3.- and then set the dropdownbox variable equal to the national parks html variale and target the ".innerHTML" to add it inbtween the open/closing tags and add more than one object into the dropdownbox variable with the "+=" 


                                                //1. Loop for np dropdown box HTML Conversion and placement
                        //Loop to convert our data to include html formating and location via class/id
// After the API's data is recieved, this function is invoked with the data as a paramater and then it runs the data through a for of loop.
// Responsible for creating the visual represntation (nPList) of every (national Park) object inside the (nationalParkDataResponse) paramater, which is placed in a for of loop to iterate through each item.
// (nPList) is declared as a function with the paramater "taco" of (nationalParkDataResponse), that taco (npDataResponse) is then put through a for of loop where every object is handled. 
// (nPList) is invoked with the API's data as a paramater in main.js, Inside of (getNationalParkData) function
const nationalParksList = (nationalParkDataResponse) => {
    console.log(nationalParksCollection)

    //a loop is setup to iterate through each object... here we are restructuring the data into an html format and placing every iteration in the correct place.
    for (const currentNationalParksObject of nationalParkDataResponse) {
        
        //   1.- declare a variable and set it equal to the html represntation of a single object  
        // nationalParksConverter function is in Parks.js and it passes one(currentNPObject) object at a time through as a paramater
        const nationalParksHTML = nationalParksConverter(currentNationalParksObject)

        //   2.- then declare a variable and set it equal to the national parks dropdown with a "document query and selector" based on the id(#) or class(.) "national park dropdown".
        const nationalParksArticleElement = document.querySelector("#nationalParks_dropdown")

        //   3.- and then set the dropdownbox variable equal to the national parks html variale and target the ".innerHTML" to add it inbtween the open/closing tags and add more than one object into the (nPDropownBox) variable with the "+=" 
        nationalParksArticleElement.innerHTML += nationalParksHTML

    }
}


                                            //2. Click Listener for NP dropdown
//responsible for listening to a click on the National Parks Dropdown Box.

// declare a variable that is equal to the html id/class (nPdropdown) dropdownbox
const npDropdownBox = document.querySelector("#nationalParks_dropdown")

    //append an ".event listener" to the variable and set the paramaters of the event
    //the event is is looking for "change" (or "click")as its first paramater
    //the next parameter is the event that happens when "change" occures, which is (event)
    npDropdownBox.addEventListener("change", (event) => {
    
    // we declare a variable that is equal to the "event target value" since we have html "values" set on each dropdown item
    // we can take the value and use it as search tool, paramater, set something equal to it, etc.
    const npName = event.target.value

    //2a.  populate user selected value (npName) in html itinerary preview section
    // we take our event target value and set it equal to the inner html of a class in a <p> tag to display the value on the page.
    const nationalParksParagrahElement = document.querySelector(".npUserChoice")
    nationalParksParagrahElement.innerHTML = npName

    //2b.  AFTER THE Change Event Occures
        // This variable is Invoked with 2 paramaters
        //adds user seleceted value (npName) as a paramater, gives access to user selected value
        //and adds the (nationalParksCollection) paramater, to give this function access to all the objects inside nationalParkCollection variable located on parksData.js 
        //both paramaters are accessed outside of this function.... when nationalParksDetails function executes, that function is located below.
        nationalParksDetails(nationalParksCollection, npName)

        // for of loop iterating through each (NPDetailsobject) object of the (NPCollection.data) array
        // used .data because it was required to break it out of the promise from the .then statement on the "getNationalParks" fetch function located on parksData.js
        for (const currentNationalParksDetailsObject of nationalParksCollection.data) {
            // if  the user selecetd (npName) value is equivilant to a (fullName) property of that single object then...
            if (currentNationalParksDetailsObject.fullName === npName) { 
                // we declare a variable that grabs the (postalcode) property 
                // and then passes that zipcode as a paramater to INVOKE getWeatherData, which is a fetch function for openweather API on weatherData.js
                // .then passes that fetch into our html converter (weatherList function) located on weatherList.js 
                const zipcode = currentNationalParksDetailsObject.addresses[0].postalCode
                getWeatherData(zipcode) // getWeatherData is invoked here
                .then (weatherList)
            }

}

})

                                                //3. Loop for np details on itinerary preview HTML conversion and placement
//responsible for creating a list national park details to turn into an html "details" element and injected into our html np itinerary preview area. 
// using the invoked paramaters of nationalParksCollection and npName...
const nationalParksDetails = (nationalParksDescriptionResponse, npName) => {
    console.log(nationalParksCollection)

    for (const currentNationalParksDetailsObject of nationalParksDescriptionResponse.data) {
        if (currentNationalParksDetailsObject.fullName === npName) {
            const nationalParksDetailsHTML = nationalParkDetailsConverter(currentNationalParksDetailsObject)

            const nationalParksDetailsElement = document.querySelector(".npButton")
            console.log(nationalParksDetailsHTML)
            nationalParksDetailsElement.innerHTML += nationalParksDetailsHTML
        }

    }
}



