import React from "react";

export default function Navigation() {
  return (
    <div className="my-2">
      {/* add a home route */}
      <ul className="row mx-1 justify-content-end text-center">
        <li className="col-3 p-0">
          <a className="nav-link" href="#about">
            About Me
          </a>
        </li>
        <li className="col-3 p-0">
          <a className="nav-link" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li className="col-3 p-0">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
