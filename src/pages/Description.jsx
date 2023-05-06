import React, {useState} from 'react';
import '../styles/description.css'
import Modal from "../components/Modal/Modal";
import TextBlock from "../components/Text/TextBlock";
import django from '../img/django-svgrepo-com.svg'
import laravel from '../img/laravel-svgrepo-com.svg'
import php from "../img/php-svgrepo-com.svg"
import python from "../img/python-svgrepo-com.svg"
import html5 from "../img/html5-svgrepo-com.svg"
import react from "../img/logo-react-svgrepo-com.svg"
import css3 from "../img/css3-svgrepo-com.svg"
import js from "../img/logo-javascript-svgrepo-com.svg"
import student from "../img/graduation-svgrepo-com.svg"
import laptop from "../img/laptop-computer-svgrepo-com.svg"
import arrow from '../img/arrow-left.svg'
import {Navigate} from "react-router-dom";
import Navigation from "../components/Navigation";

const Description = () => {
    const [modalActiveBackend, setModalActiveBackend] = useState(false)
    const [modalActiveFrontend, setModalActiveFrontend] = useState(false)
    return (
        <div id={'description'} className={'description'}>
            <div className={'about__me'}>
                <TextBlock className={'text'} title={'Обо мне'} position={"left"} textPosition={'left'}>
                    Привет!
                    Я Фёдоров Степан и это мой сайт-портфолио.
                    Он создан с целью продемонстрировать мои способности в использовании React.
                    На данный момент я обучаюсь на 3 курсе университета МИЭТ на направлении "Программная
                    инженерия".
                    На дальнейших страницах будет представлен функционал, который я могу реализовать, надеюсь, я
                    вас
                    не разочарую)
                </TextBlock>
                <div className={'student'}><img style={{width: "200px"}} src={student} alt=""/></div>
            </div>
            <div className={'stack'}>
                <div className={'laptop'}><img style={{width: "200px"}} src={laptop} alt=""/></div>
                <TextBlock className={'text'} title={'Используемый стэк'} position={"right"}
                           textPosition={'right'}>
                    В ходе своего обучения в вузе я использовал разные технологии
                    для разработки как Frontend так и Backend части сайтов.
                    Ниже можно посмотреть, какие именно инструменты я применял.
                </TextBlock>
            </div>
            <div className={'stack__technology'}>
                <Navigation prev={'/'} next={'/functional'}>
                    <div onClick={() => setModalActiveBackend(true)} className={'type__stack'}>Backend</div>
                    <div onClick={() => setModalActiveFrontend(true)} className={'type__stack'}>Frontend</div>
                </Navigation>
            </div>
            <Modal active={modalActiveBackend} setActive={setModalActiveBackend}>
                <img style={{width: "150px"}} src={python}/>
                <img style={{width: "150px"}} src={django}/>
                <img style={{width: "150px"}} src={php}/>
                <img style={{width: "150px"}} src={laravel}/>
            </Modal>

            <Modal active={modalActiveFrontend} setActive={setModalActiveFrontend}>
                <img style={{width: "100px"}} src={html5}/>
                <img style={{width: "80px"}} src={css3}/>
                <img style={{width: "100px"}} src={js}/>
                <img style={{width: "100px"}} src={react}/>
            </Modal>

        </div>
    );
};

export default Description;