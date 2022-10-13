import React from "react";

export default function Navigation({ currentPage, handleMain }) {
  return (
    <div className="my-2">
      {/* add a home route */}
      <ul className="row mx-1 justify-content-end text-center">
        <li className="col-3 p-0">
          <a
            className={currentPage === "About" ? "nav-link" : "nav-link"}
            href="#about"
            onClick={() => handleMain("About")}
          >
            About Me
          </a>
        </li>
        <li className="col-3 p-0">
          <a
            className={currentPage === "About" ? "nav-link" : "nav-link"}
            href="#portfolio"
            onClick={() => handleMain("Project")}
          >
            Portfolio
          </a>
        </li>
        <li className="col-3 p-0">
          <a
            className="nav-link"
            href="#contact"
            onClick={() => handleMain("Contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
