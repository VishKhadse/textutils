import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');  //Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

  const closeAlert = () => {
    setAlert(null); // Hide alert when clicking the close button
  };

  const toggleMode = ()=>{
    removeBodyClasses(); 
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";

      //This condition is similar to the virus add keep on occuring which is not a good user experience.
      // setInterval(() => {
      //   document.title = "TextUtils Is amazing Website";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  }

  //Below two functions represent multiple background changes assignmnet solution
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  
  const toggleMode1 = (cls)=>{
      removeBodyClasses();
      console.log(cls);
      document.body.classList.add('bg-'+cls)
      showAlert(`${cls.charAt(0).toUpperCase() + cls.slice(1)} mode has been enabled`, "success");
  }

  console.log('Environment:', process.env.NODE_ENV); 
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1}/>
        <Alert alert={alert} closeAlert={closeAlert}/>
        {/* <Navbar /> --> not working */}
        <div className="container my-3">
          <Routes>
            {/* React Router v6+ does NOT require "exact" */}
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
