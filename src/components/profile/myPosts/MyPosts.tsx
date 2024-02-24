import React, {ChangeEvent} from 'react';
import s from './myposts.module.css'
import {ActionsType, ProfilePageType} from "../../../data/data";
import Post from "./Post/Post";
import {addPostAC, updatePostAC} from "../../../redux/reducers/profilePageReducers";

type MyPostsProps = {
    profilePage: ProfilePageType
    dispatch: (action:ActionsType) => void
}

class MyPosts extends React.Component<MyPostsProps, {}> {
    render() {

        const {profilePage, dispatch} = this.props
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)  => {
            let value = e.currentTarget.value
            dispatch(updatePostAC(value))
        }
        const addPostHandler = () => {
            dispatch(addPostAC(profilePage.newValueForPost))
        }

        return (
            <div className={s.mypostWrap}>
                <div className={'input-btn'}>
                    <input onChange={onChangeHandler}
                           // value={profilePage.newValueForPost}
                    />
                    <button onClick={addPostHandler}>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post posts={profilePage.posts}/>
                </div>
            </div>
        );
    }
}

export default MyPosts;