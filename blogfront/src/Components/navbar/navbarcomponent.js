import React from "react";
import "./navbarcomponent.css";
import { Link } from "react-router-dom";
export default function NavbarComponent(props) {
  let isSignedIn = true;
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
            {isSignedIn ? (
                  <Link path to="/myblogs">
                     <li>My blogs</li>
                    
                  </Link>
                ) : (
                  <Link path to="/signin">
                      <li>Myblogs</li>
                  </Link>
                )}
               
              {isSignedIn ? (
                  <Link path to="/userprofile">
                     <li>User Profile</li>
                    
                  </Link>
                ) : (
                  <Link path to="/signin">
                      <li>User Profile</li>
                  </Link>
                )}
             
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
