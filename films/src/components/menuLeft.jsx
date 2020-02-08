import React, {Component} from 'react';

export default class MenuLeft extends Component{
    render(){
        return(
            <div className="menu__main">
                <ul className="navbar__left">
                    <li><a href="#">Сериалы</a></li>
                    <li><a href="#">Аниме</a></li>
                    <li><a href="#">Кино</a></li>
                    <li><a href="#">Комедии</a></li>
                    <li><a href="#">Триллер</a></li>
                    <li><a href="#">Мелодрамма</a></li>
                    <li><a href="#">Ужасы</a></li>
                    <li><a href="#">Новинки</a></li>
                    <li><a href="#">Классика</a></li>
                    <li><a href="#">2D</a></li>
                    <li><a href="#">3D</a></li>
                </ul>
            </div>
        )
    }
}