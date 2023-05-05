import React from 'react';
import './Modal.css'


const Modal = ({active, setActive, children, title}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className={'in__modal__title'}>
                    {title}
                </div>
                <div className={'in__modal__content'}>
                    {children}
                </div>
            </div>
        </div>
    );

};

export default Modal;