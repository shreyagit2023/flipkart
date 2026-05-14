import ThemeContext from "../context/ThemeContext"
import React from "react"

export default function ThemeBtn(){
    const {theme,themechange}=React.useContext(ThemeContext)
    return <button onClick={themechange}>{theme}</button>
}

