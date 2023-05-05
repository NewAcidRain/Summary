import React from 'react';
import main__pic from "../img/death-knight-unholy.jpg";
import '../styles/start.css';


const Start = () => {
    return (
        <div className={'start'}>
            <div className={'start__name'}>
                <a href={'/description'}><img className={'main__pic'} src={main__pic}/></a>
                <h1 className={'name'}>Степан Фёдоров</h1>
            </div>
        </div>
    );
};

export default Start;