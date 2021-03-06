import React, { useState } from "react";
import "./App.modules.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/footer/Footer";


function App() {

  const getColorTheme = () =>{
    let currentTime = parseInt(new Date().getHours());
    let currentTheme = localStorage.getItem("theme");
    return currentTheme ? (currentTheme) :  ((currentTime > 18 || currentTime < 5) ? "dark" : "light");
  }

  let [usingTheme, setUsingTheme] = useState(getColorTheme());

  return (
    <ThemeProvider theme={themes[usingTheme]}>
        <GlobalStyles />
        <div className="content-wrapper">
          <Main theme={themes[usingTheme]} setTheme={setUsingTheme} />
          <ToastContainer />
        </div>
        {
          window.location.href.includes("splash") ?
            ""
          :
            <Footer theme={themes[usingTheme]} setTheme={setUsingTheme} />
        }

    </ThemeProvider>
  );
}

export default App;
