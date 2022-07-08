    import { useEffect, useState } from "react";
    import { Accordion } from "react-bootstrap";
    import "bootstrap/dist/css/bootstrap.min.css";
    import { Table } from "react-bootstrap";


    function App() {
    return (
    <MyMovieList />
    ); }

    const MyMovieList = () => {
      const [movies, setMovies] = useState([]);

      useEffect(() => {
    fetch(`https://swapi.dev/api/films/`)
    .then(response => response.json())
    .then(result => setMovies(result.results))
    }, []
      )
      
    return (
    <>
    <h1>Star War Movies</h1>
    <Accordion>
    {movies.map((movie) => (
    <Accordion.Item eventKey="0">
    <Accordion.Header>{movie.title}</Accordion.Header>
    <Accordion.Body>
    {movie.opening_crawl}
    </Accordion.Body>
    </Accordion.Item>
    ))}
    </Accordion>
    </>
    ); }

    export default App;
