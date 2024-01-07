import React from 'react';
import {Post} from "./Post/Post";
import s from './myposts.module.css'

export const MyPosts = () => {
    return (
        <div>
            myposts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={'Post-1'}/>
                <Post message={'Post-2'}/>
            </div>
        </div>
    );
};

