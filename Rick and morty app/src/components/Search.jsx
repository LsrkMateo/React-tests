import React from "react";

function Search() {
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
