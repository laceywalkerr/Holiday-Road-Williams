getNationalParksData().then(
    (response) => {
        console.log(response.data)
        nationalParksList(response.data)
    }
)
console.log(API)