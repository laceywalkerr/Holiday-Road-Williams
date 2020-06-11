let nationalParksCollection = []

const getNationalParksData = (stateCode) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?&stateCode=${stateCode}&limit=4&api_key=${API.npsKey}`).then(
        (response) => {
            return response.json()
           
        }
    )

}

