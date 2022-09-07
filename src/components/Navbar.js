import React from "react";

export default function Navbar() {
  return (
    <div className="navbar container">
      <a href="#!" className="logo">
        The <span>Foodie</span> Express
      </a>
      <div className="nav-links">
        <a href="#!" className="">
          Home
        </a>
        <a href="#!">Recipes</a>
        <a href="#!">Settings</a>
      </div>
      <div className="sidebar-btn active">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}
