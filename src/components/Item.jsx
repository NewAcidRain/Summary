import React from 'react';
import '../styles/items.css'
import Button from "./UI/buttons/Button";

const Item = (props) => {
    return (
        <div className={'items'}>
            <div className={'item__content'}>
                <div>{props.number}. {props.item.title}</div>
                <div style={{fontSize:"20px", textAlign: "left"}}>
                    {props.item.date_of_create}
                </div>
            </div>
            <div className={'item__btns'}>
                <Button color={"#9fc258"} borderColor={'#9fc258'} onClick={() => props.remove(props.item)}>Удалить</Button>
            </div>
        </div>
    );
};

export default Item;