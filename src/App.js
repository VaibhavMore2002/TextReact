import "./App.css";
import Alerts from "./components/Alerts";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#4a4949";
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#bfbfbf";
      showAlert("Light mode has been enabled", "Success");
    }
  };

  return (
    <Router>
      <Navbar mode={mode} toggle={toggleMode} />
      <Alerts alert={alert} />

      <Routes>
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route
          exact
          path="/"
          element={
            <TextForm
              showAlert={showAlert}
              heading="Try Text-React - To perform operations on text."
              mode={mode}
            />
          }
        />
      </Routes>
      <Footer mode={mode} />
    </Router>
  );
}

export default App;
