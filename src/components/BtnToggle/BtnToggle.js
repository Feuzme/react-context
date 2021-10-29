import React, { useState, useContext } from 'react'
import './BtnToggle.css'
import { ThemeContext } from '../../context/ThemeContext';

export default function BtnToggle() {
    const { toggleTheme, theme } = useContext(ThemeContext);


    return (
        <button
            className={theme ? "btn-toggle" : "dark-btn btn-toggle"}
            onClick={toggleTheme}>
            {theme ? "Light" : "Dark"}
        </button>
    )
}
