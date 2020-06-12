/* this function will convert a single quotes object and convert it to 
an HTML string that it will return to a variable "objectHTMLRepresentativ" */

// quoteConverter is my function name
//quoteObject is my paramater that i am passing through my function
//my paramater is what i am passing through the function, and my paramater is defined
//by the contents insie {} and then returned to a variable that the parameter is defining,
// both those also happen inside the {} 

// converts 1 np object into a html element, and only grabed the data for the fullName key is created my option values
const nationalParksConverter = (nationalParksObject) => {
    const nationalParksHTMLRepresentation = 
        `<option value="${nationalParksObject.fullName}">${nationalParksObject.fullName}</option>`

    return nationalParksHTMLRepresentation
}

// converts 1 np object into a html element, and only grabed the data i need to populate a np details in the itinerary preview
const nationalParkDetailsConverter = (nationalParksObject) => {
    const npDetailsHTMLRepresentation = 
    `<details>
        <ul>
            <li>Description: ${nationalParksObject.description}<li>
            <li>Phone Number: ${nationalParksObject.contacts.phoneNumbers[0].phoneNumber}<li>
            <li>Address: ${nationalParksObject.addresses[0].line1} 
                        ${nationalParksObject.addresses[0].city}, 
                        ${nationalParksObject.addresses[0].stateCode}
                        ${nationalParksObject.addresses[0].postalCode}
            <li>
        </ul>    
    </details>`
    
    return npDetailsHTMLRepresentation
}

// const nationalParksStateCodeConverter = (nationalparksObject2) => {
//     const nationalParksStateCode = `${nationalparksObject2.stateCode}`
//     return nationalParksStateCode
// }

// had an issue on this page where i had quotesconverter.quote and same for .author, and it was returning undefined for both keys i was trying to access.
// this make sense because the string was attempting to access array data from quotesconverter, which was just defined?....