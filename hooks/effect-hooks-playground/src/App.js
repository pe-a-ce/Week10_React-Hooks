
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <GetMovies />
  );
}

  const GetMovies = () => {
    const [movie, setMovie] = useState([]);
    // the useState will allow us to call the fetch method, initial value is empty for now
    // make sure to initialize the property correctly, [] for array, {} for objects 
    useEffect(
      ()=> {
        fetch("https://swapi.dev/api/films/") // we want to call the api
        .then(response => response.json()) // what is being returned we passed to the first 'then' method call,  pass it to change into a json format
        .then(json => setMovie(json.results)) //we want to call the second 'then' method, to do something with the result from the first 'then' method call
      },[]
      )
    // 2 arguments: an arrow function{what do we want the hook to do} and an array (empty or with some properties)

    

    return (
      // what we want to be displayed on the page
      <>
      {/* <p>Name: {data && data.title}</p> */}
      {/* using Truthy object to avoid type ref errors */}

      <h2>Featured Movies:</h2>
      {
        movie.map((movie) => (
            <li key = {movie.episode_id} > 
            {/* unique key instead of index, ^^ */}
              {`${movie.title}, Director: ${movie.director},  Release: ${movie.release_date}`}
              {/* pulling these properties from the array of movies and their objects */}
            </li>
          ))

      }



      </>
    );
  }


export default App;
