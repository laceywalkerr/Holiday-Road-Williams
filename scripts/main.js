getEateriesData().then(
    () => {
        eateriesList(eateriesCollection)
    }
)
getNationalParksData().then(
    (response) => {
        console.log(response.data)
        nationalParksList(response.data)
    }
)

=======
getAttractionData().then(
    ()=> {
        attractionList(attractionCollection)
    }
)

>>>>>>> 8fd47ca7fb4ca44f96a5d2cbbf07bb1eaa0e9222
