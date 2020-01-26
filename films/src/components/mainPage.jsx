import React, {Component} from 'react';
import MenuLeft from './menuLeft'

export default class MainPage extends Component{
    render(){
        return(
            <div className="main__page">
                <MenuLeft />
            </div>
        )
    }
}