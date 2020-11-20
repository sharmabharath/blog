import React from "react";
import "./navbarcomponent.css";
import { Link } from "react-router-dom";
export default function NavbarComponent(props) {
  return (
    <div>
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__logo">
            <Link path to="/">
              <h1>LOGO</h1>
            </Link>
          </div>

          <div className="spacer" />
          <div className="toolbar__navigation-items grow">
            <ul className="grow">
              <Link path to="/myblogs">
                <li>MyBlogs</li>
              </Link>
              <Link path to="/trending">
                <li>Trending</li>
              </Link>
              <Link path to="/signin">
                <li>userprofile</li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
