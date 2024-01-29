import {PostsType} from "../data/data";

export const postsReducer = (posts: PostsType[], action: postsReducerType) => {
    switch (action.type) {
        case 'ADD-POST' : {
            // let newPost = {id: 1, message: action.payload.message, likesCount: '0'}
            // return {...posts,profilePage: {...posts.profilePage,posts: [...posts.profilePage.posts, newPost]}};
            //     return [...posts, newPost]
            return posts
        }
        default: return posts
    }
}

type postsReducerType = addTask
type addTask = ReturnType<typeof addTaskAC>

export const addTaskAC = (message: string) => {
    return {
        type: 'ADD-POST',
        payload: {message}
    } as const
}
