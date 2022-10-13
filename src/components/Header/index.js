import React from "react";
import Navigation from "../Navigation";

// TODO: Why do we use default?
export default function Header({ currentPage, handleMain }) {
  return (
    <div>
      <h1 className="mt-3">Andrew Hudgins</h1>
      <Navigation
        currentPage={currentPage}
        handleMain={handleMain}
      ></Navigation>
    </div>
  );
}
