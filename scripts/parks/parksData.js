//import API from "../Settings"
let nationalParksCollection = []

const getNationalParksData = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?&limit=1&api_key=hrW4OQOgXrkZ6GIaxtHfe0EibO3zcUGqvcC2E9mV`).then(
        (response) => {
            return response.json()
        }
    )
       
}