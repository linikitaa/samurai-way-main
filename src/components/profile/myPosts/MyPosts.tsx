import React, {ChangeEvent, useEffect, useState} from 'react';
import {Post} from "./Post/Post";
import s from './myposts.module.css'
import {PostsType} from "../../../data/data";

type MyPostsProps = {
    posts:PostsType[]

}

export const MyPosts = (props:MyPostsProps) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
    }

    return (
        <div className={s.mypostWrap}>
            <div className={'input-btn'}>
                <input  />
                <button  >Add post</button>
            </div>
            <div className={s.posts}>
                <Post posts={props.posts}/>
            </div>
        </div>
    );
};

