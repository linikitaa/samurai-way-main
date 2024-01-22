import React from 'react';
import s from './post.module.css'
import {PostsType} from "../../../../data/data";

type PostProps = {
    posts:PostsType[]
}
export const Post:React.FC<PostProps> = (props) => {
    let{posts}=props
    return (
        <div>
            {
               posts.map(el=> {
                   return (
                       <div key={el.id}>
                           <div className={s.postItem}>
                               <div className={s.img}></div>
                               <span>{el.message}</span>
                           </div>
                           <div>like {el.likesCount}</div>
                       </div>
                   )
               })
            }

        </div>
    );
};

