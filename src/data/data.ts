
export type MessagesType = {
    id:number
    message:string
}

export type DialogsType = {
    id:number
    name:string
}

export type PostsType = {
    id:number
    message:string
    likesCount:string
}

export type StateType = {
    profilePage:ProfilePageType
    messagesPage:MessagesPageType
}

export type ProfilePageType = {
    posts:PostsType[]
}
export type MessagesPageType = {
    dialogs:DialogsType[]
    messages:MessagesType[]
}
export let state:StateType= {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '12'},
            {id: 2, message: 'Blalala', likesCount: '4'},
            {id: 3, message: 'My first post', likesCount: '7'}
        ],
    },
    messagesPage:{
        dialogs: [
            {id: 1, name: 'Viktor'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'How is'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
    }
}