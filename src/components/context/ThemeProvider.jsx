import ThemeContext from "./ThemeContext";

const { useState } = require("react");


function ThemeProvider({children}){
    const[theme,settheme]=useState('light');

    const themechange=()=>{
        settheme(theme==='light'?'dark':'light');
    }

    return(
        <ThemeContext.Provider value={{theme,themechange}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider