import React, {Component} from 'react';
import Post from './post';

export default function Feed(){
    return(
        <div className="feed__main">
            <Post />
            <Post />
            <Post />
        </div>
    )
}
