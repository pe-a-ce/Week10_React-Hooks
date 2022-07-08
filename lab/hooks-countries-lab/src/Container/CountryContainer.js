import { useState, useEffect } from "react";

const CountriesList = () => {

  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(
    () => {
      fetch(`https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        .then(result => setCountries(result))
    }, []
  )

  const updateVisitedCountries = event => {
    event.preventDefault();
    const select = event.target["visited_country"];
    const selectedCountry = select.options[select.selectedIndex].value;
    if(!visitedCountries.includes(selectedCountry)) {
      setVisitedCountries([...visitedCountries, selectedCountry]);
    }
    //^^ if the selected country, is NOT in the visited countries list, add it to the list 
    // will only add a new country once :)
    console.log("added new country")

  }
  return (
    <>

      <form action="" id="country-pick" onSubmit={updateVisitedCountries} >
        <label htmlFor="country-selection">Select A Country</label>
        <select name="visited_country">
          {

            countries.map((countries, index) => {
              return (
                <option key={index}>
                  {countries.name.common}
                </option>
              );
            })
          }
        </select>
        <input type="submit" value="Mark as visited"></input>

      </form>
      <h2>Visited Countries:</h2>
      <ul>
        {
            visitedCountries.map(country =>
              <li key={country}>{`${country}`}</li>
            )
        }
      </ul>
    </>


  )


}

export default CountriesList;