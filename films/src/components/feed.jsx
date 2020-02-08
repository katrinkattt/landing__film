import React, {Component} from 'react';
import Post from './post';

export default function Feed(){
    return(
        <div className="feed__main">
            <div className="line__post">
                <Post />
                <Post />
                <Post />
            </div>
            <div className="line__post">
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}
