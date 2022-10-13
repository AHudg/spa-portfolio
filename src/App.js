import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderMain = () => {
    if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Project") {
      return <Project />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handleMain = (main) => setCurrentPage(main);

  return (
    <div className="App">
      <Header currentPage={currentPage} handleMain={handleMain}></Header>
      {renderMain()}
      <Footer></Footer>
    </div>
  );
}
