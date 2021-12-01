import React, { useState, createContext } from "react";
import { darkTheme, lightTheme } from "../styles/theme";

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const Context = createContext();
  

  console.log('Dentro do contexto: ', theme);
  console.log('Dentro do contexto: ', children);


  const toggleTheme = () => {

    console.log('TITLE: ', theme.title);
    setTheme(theme.title === 'light'? darkTheme : lightTheme);
  };

  const props = {
    theme,
    toggleTheme,
  };

  return (
    <Context.Provider value={props}>
      {children}
    </Context.Provider>
  )
};


export default ThemeContext;