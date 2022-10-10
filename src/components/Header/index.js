import React from "react";
import Navigation from "../Navigation";

// TODO: Why do we use default?
export default function Header() {
  return (
    <div>
      <h1 className="text-start">Andrew Hudgins</h1>
      <Navigation></Navigation>
    </div>
  );
}
