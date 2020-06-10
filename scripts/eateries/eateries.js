
//this function will convert a single eatery object into an HTML reprsentation and return it 

const eateriesConverter = (eateriesObject) => {

    const eateriesHTMLRepresentation = 

`<option value="Eatery Options">${eateriesObject.businessName}</option>`
    

    return eateriesHTMLRepresentation

}