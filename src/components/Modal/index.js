import React from "react";

export default function Modal({ onClose, selectedProject }) {
  const { name, description, languages, url, github, i } = selectedProject;
  console.log(name);
  return (
    <div className="row justify-content-center align-items-center modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={require(`../../assets/portfolio/${i}.png`)}
          alt="current category"
          className="col-10 modalImg"
        />
        <p className="col-11 mx-3 modalDesc">{description}</p>
        <button type="button" onClick={onClose} className="modalBtn">
          Close
        </button>
      </div>
    </div>
  );
}
