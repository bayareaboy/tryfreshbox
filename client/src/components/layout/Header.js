import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <header className="header-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/">
                  <img
                    src="/dist/images/logo/logo_transparent.png"
                    alt="Logo"
                    style={{ width: "110px", height: "33px" }}
                  />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="bar-icon" />
                  <span className="bar-icon" />
                  <span className="bar-icon" />
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link data-scroll-nav="0" to="/#produce">
                        Products
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link data-scroll-nav="0" to="/contact">
                        Support
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link data-scroll-nav="0" to="/ourstory">
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
