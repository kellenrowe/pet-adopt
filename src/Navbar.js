import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

/** NavBar Component
 *  
 *  Props: none
 *  State: none
 * 
 *  App -> NavBar
 */
function NavBar() {

  return (
    <div>
      <Navbar expand="md">
        <div className="container">
          <NavLink
            exact to="/"
            className="navbar-brand mr-0 ml-3">
          Find-A-Pet
        </NavLink>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/dogs">Dogs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/cats">Cats</NavLink>
          </NavItem>
        </Nav>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;