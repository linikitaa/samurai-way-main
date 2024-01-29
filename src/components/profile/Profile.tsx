import React from 'react';
import s from './profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {PostsType} from "../../data/data";
import {useParams} from "react-router-dom";


type ProfileProps = {
    posts:PostsType[]

}
export const Profile = (props:ProfileProps) => {

    const params = useParams()

    return (
        <div className={s.profileWrapper}>
            <div className={s.profile}>
                <div className={s.avatar}></div>
                <div className={s.description}>Nikita</div>
            </div>
            <MyPosts posts={props.posts}

            />
        </div>
    );
};

