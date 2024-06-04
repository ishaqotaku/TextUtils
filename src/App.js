import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, alertType) => {
    setAlert({msg: message, typeAl: alertType});
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  
  const toggleMode = () => {
    if(mode === "light"){ 
      setMode("dark");
      document.getElementById("fileBody").className = "bg-dark";
      showAlert("Dark mode has been enabled","success");
    } 
    else{
      setMode("light");
      document.getElementById("fileBody").className = "";
      showAlert("Light mode has been enabled","success");
    }
  };

  return (
    // <Router>
      <div className={`bg-${mode} text-${mode === "light" ? "dark" : "light"}`} data-bs-theme={mode}>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">

          <TextForm heading="Enter your text to analyze" showAlert={showAlert}/>
          <About/>

          {/* <Routes>
            <Route path={"/about"} element={<About/>}></Route>
            <Route path={"/"} element={<TextForm heading="Enter your text to analyze" showAlert={showAlert}/>}></Route>
          </Routes> */}
        </div>
      </div>
    // </Router>
  );
}

export default App;
