import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            Star Wars Databank
            <i class="fab fa-jedi-order" style={{ marginLeft: "10px" }}></i>
          </a>
          <div
            className="offcanvas offcanvas-start bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title text-white"
                id="offcanvasDarkNavbarLabel"
              >
                Star Wars Databank
                <i class="fab fa-jedi-order" style={{ marginLeft: "10px" }}></i>
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/">
                    <a
                      className="nav-link active nav-decoration-none"
                      aria-current="page"
                      style={{ fontSize: "30px" }}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/people">
                    <a
                      className="nav-link nav-decoration-none"
                      aria-current="page"
                      style={{ fontSize: "30px" }}
                    >
                      People
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/planets">
                    <a
                      className="nav-link nav-decoration-none"
                      aria-current="page"
                      style={{ fontSize: "30px" }}
                    >
                      Planets
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/vehicles">
                    <a
                      className="nav-link nav-decoration-none"
                      aria-current="page"
                      href="#"
                      style={{ fontSize: "30px" }}
                    >
                      Vehicles
                    </a>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/starships">
                    <a
                      className="nav-link nav-decoration-none"
                      aria-current="page"
                      href="#"
                      style={{ fontSize: "30px" }}
                    >
                      Starships
                    </a>
                  </Link>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-danger" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
