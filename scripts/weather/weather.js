const weatherConverter = (weatherObject) => {
    const weatherHTMLRepresentation = 
        `<option value="NP1">${weatherObject.fullName}</option>`

    return weatherHTMLRepresentation
}