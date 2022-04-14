import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="nav-flex">
          <li className="nav-space">
          </li>
          <li className="nav-space">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav-flex">
          <li className="nav-space">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="nav-space">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header>
      <div className="nav-flex nav-start">
      <Link to="/" className='back-to-menu'>← Back to Menu</Link>
      </div>
      <div className="nav-flex nav-end">
      <nav>
        {showNavigation()}
      </nav>
      </div>
    </header>
  );
}

export default Nav;
