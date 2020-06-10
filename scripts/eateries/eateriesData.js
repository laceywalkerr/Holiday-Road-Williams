
//fetching array from API and turning it into an object
let eateriesCollection = []

const getEateriesData = () => {

    //grabs array from API
    return fetch("http://holidayroad.nss.team/eateries").then(
            (httpResponse) => {
                return httpResponse.json()
            }
           
    )

 //turns array into object to be able to use Javascript
        .then(
            (arrayOfEateries) => {
                eateriesCollection = arrayOfEateries
            }
        )

    
}        