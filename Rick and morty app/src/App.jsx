import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const initialURL = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllCharacters(data.results);
        setFilteredCharacters(data.results); // Inicialmente, muestra todos los personajes
        setInfo(data.info);
      })
      .catch((err) => console.log(err));
  };

  const handleMiEvento = (fetchCharacter) => {
    console.log("se recibio la informacion del hijo: ", fetchCharacter);
    let results = allCharacters.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(fetchCharacter.toLowerCase())
      ) {
        return elemento;
      }
    });
    setFilteredCharacters(results);
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialURL);
  }, []);

  return (
    <>
      <Navbar titulo="Rick and morty API" />

      <div className="container mb-5">
        <Search onMiEvento={handleMiEvento} />
        <Characters characters={filteredCharacters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;

