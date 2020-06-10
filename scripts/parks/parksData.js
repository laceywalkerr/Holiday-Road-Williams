let nationalParksCollection = []

const getNationalParksData = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?&limit=4&api_key=${API.npsKey}`).then(
        (response) => {
            return response.json()
        }
    )
       
}