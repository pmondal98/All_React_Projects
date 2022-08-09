import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [darkMode, setdarkMode] = useState("light");
  const toggleMode = () => {
    if (darkMode === "light") {
      setdarkMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setdarkMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={darkMode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Enter your text to analyze" mode={darkMode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
