import React from "react";
import selfie from "../../assets/selfie.png";

export default function About() {
  return (
    <div className="row justify-content-center">
      <img
        src={selfie}
        alt="A selfie of myself in front of bougainvilleas in Paraguay."
        className="col-9 selfie"
      ></img>
      <div className="col-11">
        <span className="accent-text">
          I'm Andrew, a biomedical engineer who recently dived head first into
          software engineering.
        </span>
        <p className="mt-3 text-start">
          While I am new to this industry, programming is not foreign to me; I
          started my journey in university learning MATLAB, LabVIEW, and C.
          After graduation, I went to work for a magnet hospital in the Houston
          Medical Center, assembling and managing LVADs. While I have learned
          much from my job, I am ready for my next chapter in life- to learn
          more, to be more, to grow more. <br />
          <br />
          When I'm not behind my computer, there is always a plant that needs
          watering or a good book to read. I lately have been expanind my recipe
          box and cooking more- as well as fermenting my own wine. May our paths
          cross soon!
        </p>
      </div>
    </div>
  );
}
