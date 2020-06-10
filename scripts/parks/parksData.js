import API from "../Settings"
let nationalParks = [
    // {
    //     quote: "Forage brooklyn prism shaman readymade hammock selvage hot chicken, mumblecore master cleanse post-ironic palo santo copper mug.",
    //     author: "Ron Burgandy"
    // },

    // {
    //     quote: "Bango desert pupfish bullhead suckermouth armored catfish jewfish snake mackerel spiderfish spinefoot.",
    //     author: "John Maden"
    // },
    
    // {
    //     quote: "Northern sea robin masu salmon oceanic whitetip shark; sandfish ray combtail gourami northern squawfish.",
    //     author: "NPH"
    // }

]

const getNationalParksData = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?&api_key=${API.npsKey}`).then(
        (reponse) => {
            return reponse.json()
        }
    )
        .then(
            (arrayOfNationalParks) => {
                quotesCollection = arrayOfNationalParks
            }
        )
}