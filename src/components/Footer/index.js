import React from "react";

export default function Footer() {
  return (
    <div className="row my-2 justify-content-center">
      <a
        href="https://github.com/AHudg/"
        className="col-3 mx-1 modalLinks"
        target="_blank"
        rel="noreferrer noopener"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/andrew-hudgins-153164189/"
        className="col-3 mx-1 modalLinks"
        target="_blank"
        rel="noreferrer noopener"
      >
        LinkedIn
      </a>
      <a
        href="https://music.apple.com/profile/A_Hudg"
        className="col-3 mx-1 modalLinks"
        target="_blank"
        rel="noreferrer noopener"
      >
        Apple Music
      </a>
    </div>
  );
}
