import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [darkMode, setdarkMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
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
      <Router>
        <Navbar title="TextUtils" mode={darkMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={darkMode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text to analyze"
                  mode={darkMode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
