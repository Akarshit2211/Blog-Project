import React, { useState } from 'react';
import classes from './navbar.module.css';

const navbar = () => {

    const [hover, setHover] = useState(false);

    return (
        <div 
        onMouseOver = {() => setHover(true)}
        onMouseLeave = {() => setHover(false)}
        className = {classes.navbar}>
            
        </div>
    )
}

export default navbar