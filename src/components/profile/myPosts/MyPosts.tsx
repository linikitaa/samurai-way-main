import React, {ChangeEvent} from 'react';
import s from './myposts.module.css'
import {ProfilePageType} from "../../../data/data";
import Post from "./Post/Post";

type MyPostsProps = {
    profilePage: ProfilePageType
    dispatch: (action: any, value?:string) => void
}

class MyPosts extends React.Component<MyPostsProps, {}> {
    render() {

        const {profilePage, dispatch} = this.props
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)  => {
            let value = e.currentTarget.value
            let action = {type:'UPDATE-NEW-POST-TEXT',value}
            dispatch(action)
        }
        const addPostHandler = () => {
            dispatch({type:'ADD-POST'})
            dispatch('')
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