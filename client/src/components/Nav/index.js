import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        Budget App
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/addutilities"
              className={window.location.pathname === "/addutilities" ? "nav-link active" : "nav-link"}
            >
              Add Utilities
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
