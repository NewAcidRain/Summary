import React, {useState} from 'react';
import Input from "./UI/inputs/Input";
import Button from "./UI/buttons/Button";

const ItemForm = ({create}) => {
    const [item, setItem] = useState({title: '', description: ''});

    const addNewItem = (e) => {
        e.preventDefault();
        if (item.title && item.description) {
            const newItem = {
                ...item, id: Date.now(), date_of_create: Date().split("GMT")[0]
            }
            create(newItem);
            setItem({title: '', description: ''})
        }
    }

    return (
        <form className={'add__form'}>
            <Input type={'text'}
                   placeholder={'Название'}
                   value={item.title}
                   onChange={(e => setItem({...item, title: e.target.value}))}
            />
            <Input type={'text'}
                   placeholder={'Описание'}
                   value={item.description}
                   onChange={(e => setItem({...item, description: e.target.value}))}
            />

            <Button onClick={addNewItem}>Добавить</Button>

        </form>
    );
};

export default ItemForm;