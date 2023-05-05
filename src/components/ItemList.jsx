import React from 'react';
import Item from "./Item";
import '../styles/items.css'
const ItemList = ({items,title,remove}) => {
    return (
        <div className={'item__list'}>
            <div className={'items__title'}>{title}</div>

            {items.map((item, index) =>
                <Item remove={remove} number={index + 1} item={item} key={item.id}/>
            )}
        </div>
    );
};

export default ItemList;