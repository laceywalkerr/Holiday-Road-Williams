//this function will convert a single chosen eatery object into an HTML reprsentation and return it into the 

const eateryChosenConverter = (eateriesObject) => {

    const eateryHTMLRepresentation = 

`<option value="Selected Eatery">${eateriesObject.businessName}</option>`
    

    return eateryHTMLRepresentation

}