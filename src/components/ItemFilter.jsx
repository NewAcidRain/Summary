import React from 'react';
import Input from "./UI/inputs/Input";
import Select from "./UI/select/Select";

const ItemFilter = ({filter,setFilter}) => {
    return (
        <div>
            <div className={'search__container'}>
                <Input type={'text'}
                       placeholder={'Поиск'}
                       value={filter.query}
                       onChange={e => setFilter({...filter, query: e.target.value})}
                />
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

        </div>
    );
};

export default ItemFilter;