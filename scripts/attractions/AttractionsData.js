let attractionCollection = []

const getAttractionData = () => {

    //grabs array from API
    return fetch("http://holidayroad.nss.team/bizarreries").then(
            (attractionHTTPResponse) => {
                return attractionHTTPResponse.json()
            }
           
    )

 //turns array into object to be able to use Javascript
        .then(
            (arrayOfAttraction) => {
                attractionCollection = arrayOfAttraction
            }
        )

    
}        