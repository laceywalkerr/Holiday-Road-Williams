/* this function will convert a single quotes object and convert it to 
an HTML string that it will return to a variable "objectHTMLRepresentativ" */

// quoteConverter is my function name
//quoteObject is my paramater that i am passing through my function
//my paramater is what i am passing through the function, and my paramater is defined
//by the contents insie {} and then returned to a variable that the parameter is defining,
// both those also happen inside the {} 
const quotesConverter = (quotesObject) => {
    const quotesHTMLRepresentation = `<section class="quote">${quotesObject.quote} 
                                    <a class="quote__author">${quotesObject.author}</a>
                                    </section>`

    return quotesHTMLRepresentation
}

// had an issue on this page where i had quotesconverter.quote and same for .author, and it was returning undefined for both keys i was trying to access.
// this make sense because the string was attempting to access array data from quotesconverter, which was just defined?....