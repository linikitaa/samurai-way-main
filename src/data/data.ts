import {v1} from "uuid";

export type MessagesType = {
    id: string
    userId: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
}
export type PostsType = {
    id: string
    message: string
    likesCount: string
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}
export type ProfilePageType = {
    posts: PostsType[]
    newValueForPost: string
}
export type MessagesPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type storeType = {
    _state: StateType
    _callSubscriber:(_state:StateType)=>void

    getState:()=>StateType
    subscribe:(observer:any)=>void

    dispatch:(action:any,value?:string)=>void
}

export let store:storeType = {
    _state: {
        profilePage: {
            newValueForPost: '',
            posts: [
                { id: v1(), message: 'Hi, how are you?', likesCount: '12' },
                { id: v1(), message: 'Blalala', likesCount: '4' },
                { id: v1(), message: 'My first post', likesCount: '7' }
            ],
        },
        messagesPage: {
            dialogs: [
                { id: "1", name: 'Viktor' },
                { id: "2", name: 'Andrew' },
                { id: "3", name: 'Sveta' },
                { id: "4", name: 'Valera' }
            ],
            messages: [
                { id: v1(), userId: "1", message: 'Hi' },
                { id: v1(), userId: "1", message: 'Y32232323o' },
                { id: v1(), userId: "3", message: 'How is' },
                { id: v1(), userId: "4", message: 'Yo' },
                { id: v1(), userId: "2", message: 'Yffffffffo' }
            ],
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
      return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action === 'ADD-POST') {
            let newPost = {id: v1(), message: this._state.profilePage.newValueForPost, likesCount: '0'}
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber(this._state)
        }
        else if  (action === 'UPDATE-NEW-POST-TEXT'){
            debugger
            this._state.profilePage.newValueForPost = action.value
            this._callSubscriber(this._state)
            console.log(action.value)
        }
    }
}

