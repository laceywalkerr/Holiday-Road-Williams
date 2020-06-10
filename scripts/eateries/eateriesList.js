 /*responsible for generating an eateries HTML represenations and putting in the browswer */

 const eateriesList = (eateriesCollection) => {

    for (const currentEateriesObject of eateriesCollection) {
   const eateriesHTML = eateriesConverter(currentEateriesObject) 


   const eateriesArticleElement = document.querySelector("#eateries_dropdown")

   eateriesArticleElement.innerHTML += eateriesHTML
   }
}   
