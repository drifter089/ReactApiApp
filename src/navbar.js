import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="ui secondary pointing menu">
        <NavLink className="item" activeClassName="item active" to="/search">
          unsplash search
        </NavLink>
        <NavLink
          className="item"
          activeClassName="item active"
          to="/wikisearch"
        >
          wiki search
        </NavLink>

        {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul> */}
      </nav>
    </div>
  );
};

export default Navbar;
