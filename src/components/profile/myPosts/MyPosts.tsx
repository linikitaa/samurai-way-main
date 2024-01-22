import React, {ChangeEvent, useState} from 'react';
import {Post} from "./Post/Post";
import s from './myposts.module.css'
import {PostsType} from "../../../data/data";

type MyPostsProps = {
    posts:PostsType[]
}

export const MyPosts = (props:MyPostsProps) => {
    let[newPost, setNewPost]=useState('')
    const addPostHandler = ()=> {

    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        setNewPost(e.currentTarget.value)
    }

    return (
        <div className={s.mypostWrap}>
            <div className={'input-btn'}>
                <input value={newPost}
                       onChange={onChangeHandler}
                ></input>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                <Post posts={props.posts}/>
            </div>
        </div>
    );
};

