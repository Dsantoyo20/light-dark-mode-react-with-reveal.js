import React from 'react'
import styled from 'styled-components';

let Sun, Moon;

Sun = Moon =styled.img `
    position: absolute;
    top: 2rem;
    right: 4rem;

`;

export const Toggle = ({ theme, toggleTheme}) => {
    console.log(theme);
    return (
        <div onClick={toggleTheme}>
           {theme === 'light' ? <Moon  src="https://img.icons8.com/ios-filled/100/000000/bright-moon.png"/> : <Sun  src="https://img.icons8.com/android/100/ffffff/sun.png"/>}
        </div>
    )
}
