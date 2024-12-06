import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
const Navbar = ({ setCategory }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg text-light bg-dark ">
        <a className="navbar-brand text-light" href="/">
          <span className="badge fs-3 text-uppercase ms-5"> News App</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav cursor-pointer me-5">
            <li className="nav-item">
              <div
                className="nav-link text-light"
                onClick={() => setCategory("technology")}
                href="/"
              >
                Technology
              </div>
            </li>

            <li className="nav-item">
              <div
                className="nav-link text-light"
                onClick={() => setCategory("business")}
                href="/"
              >
                Business
              </div>
            </li>

            <li className="nav-item">
              <div
                className="nav-link text-light"
                onClick={() => setCategory("health")}
                href="/"
              >
                Health
              </div>
            </li>

            <li className="nav-item">
              <div
                className="nav-link text-light"
                onClick={() => setCategory("sports")}
                href="/"
              >
                Sports
              </div>
            </li>

            <li className="nav-item">
              <div
                className="nav-link text-light"
                onClick={() => setCategory("entertainment")}
                href="/"
              >
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
