getEateriesData().then(
    () => {
        eateriesList(eateriesCollection)
    }
)
getNationalParksData().then(
    (response) => {
        nationalParksList(response.data)

    }
)

getAttractionData().then(
    ()=> {
        attractionList(attractionCollection)
    }
)
