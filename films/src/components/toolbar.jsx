import React, {Component} from 'react';

export default class Toolbar extends Component{
    render(){
        return(
            <div className="toolbar__main">
                <div>
                    <a href="#home">Home</a>
                    <a href="#ourService">Our Service</a>
                    <a href="#feedback">Bye</a>
                    <a href="#skills">About</a>
                </div>
            </div>
        )
    }
}