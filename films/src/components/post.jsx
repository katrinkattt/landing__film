import React, {Component} from 'react';

export default function Post(props){
    return(
        <div className="post__main">
            <a  href={props.link}></a>
            <div className="post__foto" style={{background:`url(${props.foto})`}}></div>
            <div className="post__title">{props.title}</div>
            <div className="post__text">{props.text}</div>
        </div>
    )
}
