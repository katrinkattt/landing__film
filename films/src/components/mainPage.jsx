import React, {Component} from 'react';
import MenuLeft from './menuLeft';
import Toolbar from './toolbar';

export default class MainPage extends Component{
    render(){
        return(
            <div className="main__page">
                <Toolbar />
                <MenuLeft />
            </div>
        )
    }
}