import './App.css';
import CountriesList from './Container/CountryContainer';



function App() {


  return (
    <>
   
    <h1>Keep track of where you have visited!</h1>
    <hr></hr>
    <CountriesList className="dropdown"/>
    <hr></hr>
 
  
    
    </>
  );
}

   

export default App;



// to do: create components and move things around, seperate cont needs o be created, add handleFormSubmit for submit to list visited countries