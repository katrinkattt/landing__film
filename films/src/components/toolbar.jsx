import React, {Component} from 'react';

export default class Toolbar extends Component{
    render(){
        return(
            <div className="toolbar__main">
                <div>
                    <a href="#kino">кино</a>
                    <a href="#serials">сериалы</a>
                    <a href="#anime">аниме</a>
                    <a href="#we">мы в соцсетях</a>
                </div>
            </div>
        )
    }
}