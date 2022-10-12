import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <About></About> */}
      <Project></Project>
      <Footer></Footer>
    </div>
  );
}

export default App;
