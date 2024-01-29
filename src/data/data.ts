import {v1} from "uuid";


export type MessagesType = {
    id:string
    userId:string
    message:string
}
export type DialogsType = {
    id:string
    name:string
}
export type PostsType = {
    id:string
    message:string
    likesCount:string
}
export type RootStateType = {
    profilePage:ProfilePageType
    messagesPage:MessagesPageType
}
export type ProfilePageType = {
    posts:PostsType[]
    newPostText:string
}
export type MessagesPageType = {
    dialogs:DialogsType[]
    messages:MessagesType[]
}
export let data:RootStateType= {
    profilePage: {
        posts: [
            {id: v1(),  message: 'Hi, how are you?', likesCount: '12'},
            {id: v1(),  message: 'Blalala', likesCount: '4'},
            {id: v1(),  message: 'My first post', likesCount: '7'}
        ],
        newPostText:'It-kamasutra'
    },
    messagesPage:{
        dialogs: [
            {id: "1", name: 'Viktor'},
            {id: "2", name: 'Andrew'},
            {id: "3", name: 'Sveta'},
            {id: "4", name: 'Valera'}
        ],
        messages: [
            {id: v1(), userId:"1", message: 'Hi'},
            {id: v1(), userId:"1", message: 'Y32232323o'},
            {id: v1(), userId:"3", message: 'How is'},
            {id: v1(), userId:"4", message: 'Yo'},
            {id: v1(), userId:"2", message: 'Yffffffffo'}
        ],
    }
}

// export let addPost = (postMessage:string) => {
//     let newPost = {id:'5', message: postMessage, likesCount: '0'}
//     data.profilePage.posts.push(newPost)
//
// }



