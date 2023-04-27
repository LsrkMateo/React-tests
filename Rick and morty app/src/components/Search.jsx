import React from "react";
import { useState } from "react";
function Search(props) {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    props.onMiEvento(e.target.value)
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary barra-busqueda">
        <div className="container-fluid">
          <form className="d-flex w-100 p-2" role="search">
            <input
              className="form-control me-2 w-75 "
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
            />
            <button className="btn btn-outline-success w-25" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Search;
