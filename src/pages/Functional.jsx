import React, {useMemo, useState} from 'react';
import '../styles/fuctional.css'
import ItemList from "../components/ItemList";
import ItemFilter from "../components/ItemFilter";
import ItemForm from "../components/ItemForm";

const Functional = () => {
    const [items, setItems] = useState([
        {id: 1, title: "React", date_of_create: Date().split("GMT")[0], description: 'JS framework'},
        {id: 2, title: "Django", date_of_create: Date().split("GMT")[0], description: 'Python framework'},
        {id: 3, title: "Laravel", date_of_create: Date().split("GMT")[0], description: 'PHP framework'},
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''})


    const sortedItem = useMemo(() => {
        if (filter.sort) {
            return [...items].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return items;
    }, [filter.sort, items])


    const sortedAndSearchedItems = useMemo(() => {
        console.log(sortedItem.title)
        return sortedItem.filter(item => item.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedItem])


    const createItem = (newItem) => {
        setItems([...items, newItem])
    }

    const deleteItem = (item) => {
        setItems(items.filter(p => p.id !== item.id))
    }

    return (
        <div className={'functional__page'}>
            <ItemForm create={createItem}/>
            <hr style={{margin: "15px"}}/>
            <ItemFilter filter={filter} setFilter={setFilter}/>
            {sortedAndSearchedItems.length ?
                <ItemList remove={deleteItem} items={sortedAndSearchedItems} title={'Фреймворки'}/> :
                <div className={'emptyItems'}>Элементы не найдены</div>}
        </div>
    );
};

export default Functional;