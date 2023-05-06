import React, {useState} from 'react';
import Input from "./UI/inputs/Input";
import Select from "./UI/select/Select";
import plus from '../img/plus-lg.svg'
import '../styles/search.css'
import Modal from "./Modal/Modal";
import ItemForm from "./ItemForm";

const ItemFilter = ({filter,setFilter,createItem}) => {
    const [modalActiveAdd, setModalActiveAdd] = useState(false)

    return (
        <div>
            <div className={'search__container'}>
                <div className={'input__pos'}>
                <Input type={'text'}
                       placeholder={'Поиск'}
                       value={filter.query}
                       color={'white'}
                       borderColor ={'#9fc258'}
                       onChange={e => setFilter({...filter, query: e.target.value})}
                />
                </div>
                <div  onClick={() => setModalActiveAdd(true)}>
                    <img className={'plus'} src={plus} alt={''}/>
                </div>
            </div>

            <div className={'select'}>
                <Select defaultValue={'Сортировка по'} options={[
                    {value: 'title', name: 'По заголовку'},
                    {value: 'date_of_create', name: 'По дате добавления'},
                ]}
                        value={filter.sort}
                        onChange={selectedSort => setFilter({...filter,sort: selectedSort})}

                />
            </div>
            <Modal title={'Добавить новый элемент'} active={modalActiveAdd} setActive={setModalActiveAdd}>
                <ItemForm setModelActiveAdd={setModalActiveAdd} create={createItem}/>
            </Modal>

        </div>
    );
};

export default ItemFilter;