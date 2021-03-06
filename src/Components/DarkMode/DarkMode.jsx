import React from "react";
import './DarkMode.css';

function DarkMode(){
    let clickedClass = "clicked"
    const body = document.body
    const lightTheme = "light"
    const darkTheme = "dark"
    let theme
  
    if (localStorage) {
      theme = localStorage.getItem("theme")
    }
  
    if (theme === lightTheme || theme === darkTheme) {
      body.classList.add(theme)
    } else {
      body.classList.add(lightTheme)
    }
  
    const switchTheme = e => {
      if (theme === lightTheme) {
        body.classList.replace(lightTheme, darkTheme)
        e.target.classList.add(clickedClass)
        localStorage.setItem("theme", "dark")
        theme = darkTheme
      } else {
        body.classList.replace(darkTheme, lightTheme)
        e.target.classList.remove(clickedClass)
        localStorage.setItem("theme", "light")
        theme = lightTheme
      }
    }
  
    return (
      <button
        className={theme === "dark" ? clickedClass : ""}
        id="darkMode"
        onClick={e => switchTheme(e)}
      >{'dark' === '🌚' ? lightTheme : '🌛'}</button>
    )
  }
  
  export default DarkMode;