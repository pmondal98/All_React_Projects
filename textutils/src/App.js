import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [darkMode, setdarkMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (darkMode === "light") {
      setdarkMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode is enabled", "success");
    } else {
      setdarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "success");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={darkMode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          showAlert={showAlert}
          heading="Enter your text to analyze"
          mode={darkMode}
        />

        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
