import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
function App() {
  const [charactes, setCharactes] = useState([]);
  const [info, setInfo] = useState({});
  const initialURL = "https://rickandmortyapi.com/api/character";

  const fetchChararcter = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharactes(data.results);
        setInfo(data.info);
      })
      .catch((err) => console.log(err));
  };
  const onPrevious = () => {
    fetchChararcter(info.prev);
  };
  const onNext = () => {
    fetchChararcter(info.next);
  };
  useEffect(() => {
    fetchChararcter(initialURL);
  }, []);

  return (
    <>
      <Navbar titulo="Rick and morty API" />

      <div className="container mb-5">
        <Search />
        <Characters characters={charactes} />
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
