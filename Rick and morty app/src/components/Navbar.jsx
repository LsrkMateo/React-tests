import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.titulo}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
