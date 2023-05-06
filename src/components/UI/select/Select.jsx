import React from 'react';
import classes from './Select.module.css'
const Select = ({options, defaultValue, value, onChange}) => {
    return (
        <select className={classes.mySelect} value={value} onChange={event => onChange(event.target.value)}>
            <option className={classes.myOption} disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}

                </option>
            )}
        </select>
    );
};

export default Select;