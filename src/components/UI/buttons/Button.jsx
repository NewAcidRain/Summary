import React from 'react';
import classes from "./Button.module.css"
const Button = ({borderColor,color,children,...props}) => {
    return (
        <button style={{border: "2px solid color".replace('color',borderColor),color:color}} {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default Button;