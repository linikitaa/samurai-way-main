import React from 'react';
import s from './profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.profileWrapper}>
            <div className={s.bgImage}></div>
            <div className={s.profile}>
                <div className={s.avatar}></div>
                <div className={s.description}>Nikita Li</div>
            </div>
            <MyPosts/>
        </div>
    );
};

