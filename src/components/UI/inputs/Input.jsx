import React from 'react';
import classes from "./Input.module.css"

const Input = (props) => {
    return (
        <input style={{border: "2px solid color".replace('color',props.borderColor),color:props.color}} {...props}
               className={classes.myInput}/>
    );
};

export default Input;