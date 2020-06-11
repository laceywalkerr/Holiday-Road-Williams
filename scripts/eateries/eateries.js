
//this function will convert a single eatery object into an HTML reprsentation and return it 

const eateriesConverter = (eateriesObject) => {

    const eateriesHTMLRepresentation = 

`<option value="${eateriesObject.businessName}">${eateriesObject.businessName}</option>`
    

    return eateriesHTMLRepresentation

}