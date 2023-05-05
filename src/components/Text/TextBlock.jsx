import React from 'react';
import '../../styles/description.css'

const TextBlock = ({title,children,titlePosition,textPosition}) => {
    return (
        <div className={"text"}>
            <div style={{textAlign: titlePosition}} className={'text__block__title'}>{title}</div><br/>
            <div className={'text__content'} style={{textAlign:textPosition}}>
                <div className={'text__children'}>
            {children}
                </div>
            </div>
        </div>
    );
};

export default TextBlock;