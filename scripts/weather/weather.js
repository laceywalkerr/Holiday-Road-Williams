const weatherConverter = (weatherObject) => {
    const weatherHTMLRepresentation = 
        `<option value="#">${weatherObject.fullName}</option>`

    return weatherHTMLRepresentation
}