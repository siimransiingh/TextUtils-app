import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/AboutUs";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const darktoggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enables", "success");
      document.title = "TextUtils - dark mode";
      // setInterval(() => {
      //   document.title = " TextUtils is amazing mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = " Install textUtils now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enables", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          darktoggleMode={darktoggleMode}
          aboutText="About MyApp"
          mode={mode}
        />
        <Alert alert={alert}></Alert>
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
             exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  mode={mode}
                  heading="Enter the text to analyse below"
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
