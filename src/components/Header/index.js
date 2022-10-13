import React from "react";
import Navigation from "../Navigation";

// TODO: Why do we use default?
export default function Header({ currentPage, handleMain }) {
  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handleMain={handleMain}
      ></Navigation>
    </div>
  );
}
