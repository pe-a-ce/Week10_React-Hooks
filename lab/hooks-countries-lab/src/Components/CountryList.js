import { useState } from "react";

const VisitedList = ({addNewCountryToListButton}) => {
    const [countries, setCountries] = useState([]);

    const handleFormSubmit = (event) =>{
        event.preventDefault(); // default is to refresh the page
}

const newVisited = {countries: countries}

setCountries()

addNewCountryToListButton(newVisited);
   
}


export default VisitedList;