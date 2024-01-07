import React from 'react';
import s from './post.module.css'

type PostProps = {
    message:string
}
export const Post:React.FC<PostProps> = (props) => {
    let{message}=props
    return (
        <div>
            <div className={s.postItem}>
                <span className={s.img}>img</span>
                <span>{props.message}</span>
            </div>
        </div>
    );
};

