import React from "react";

export default function Modal({ onClose, selectedProject }) {
  const { name, description, languages, url, github, i } = selectedProject;

  const checkUrl = (url) => {
    if (!url) {
      return;
    }
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="col-5 modalLinks"
      >
        Deployed App
      </a>
    );
  };

  return (
    <div className="row justify-content-center align-items-center modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img
          src={require(`../../assets/portfolio/${i}.png`)}
          alt="current category"
          className="col-10 modalImg"
        />
        <div className="row col-11 mx-3 p-3 justify-content-between modalText">
          <p className="col-12 modalDesc">{description}</p>
          {languages.map((language) => (
            <span className="col-4 modalLang" key={language}>
              {language}
            </span>
          ))}
          {checkUrl(url)}
          <a
            href={github}
            target="_blank"
            rel="noreferrer noopener"
            className="col-5 modalLinks"
          >
            GitHub Repo
          </a>
        </div>
        <button type="button" onClick={onClose} className="col-2 modalBtn">
          Close
        </button>
      </div>
    </div>
  );
}
