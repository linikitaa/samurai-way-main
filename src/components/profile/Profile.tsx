import React from 'react';
import s from './profile.module.css'
import {PostsType, ProfilePageType} from "../../data/data";
import {useParams} from "react-router-dom";
import MyPosts from "./myPosts/MyPosts";


type ProfileProps = {
    profilePage: ProfilePageType
    dispatch: (action: any, value?:string) => void

}

class Profile extends React.Component<ProfileProps> {

    render() {

        const {profilePage, dispatch} = this.props
        return (
            <div className={s.profileWrapper}>
                <div className={s.profile}>
                    <div className={s.avatar}></div>
                    <div className={s.description}>Nikita</div>
                </div>
                <MyPosts profilePage={profilePage}
                         dispatch={dispatch}
                />
            </div>
        )
    }
}
export default Profile;



