import {v1} from "uuid";
import {ProfileActionsType, profilePageReducer} from "../redux/reducers/profilePageReducers";
import {DialogsActionsType, dialogsPageReducer} from "../redux/reducers/dialogsPageReducer";


export type PostsType = {
    id: string
    message: string
    likesCount: string
}
export type ProfilePageType = {
    posts: PostsType[]
    newValueForPost: string
}


export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    userId: string
    message: string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newValueForMessage: string
}


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type ActionsType = | ProfileActionsType | DialogsActionsType

export type storeType = {
    _state: StateType
    _callSubscriber: (_state: StateType) => void

    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void

    dispatch: (action: ActionsType) => void
}

export let store: storeType = {
    _state: {
        profilePage: {
            newValueForPost: '',
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCount: '12'},
                {id: v1(), message: 'Blalala', likesCount: '4'},
                {id: v1(), message: 'My first post', likesCount: '7'}
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: "1", name: 'Viktor'},
                {id: "2", name: 'Andrew'},
                {id: "3", name: 'Sveta'},
                {id: "4", name: 'Valera'}
            ],

            messages: [
                {id: v1(), userId: "1", message: 'Hi'},
                {id: v1(), userId: "1", message: 'Y32232323o'},
                {id: v1(), userId: "3", message: 'How is'},
                {id: v1(), userId: "4", message: 'Yo'},
                {id: v1(), userId: "2", message: 'Yffffffffo'}
            ],
            newValueForMessage: '',
        }
    },
    _callSubscriber(state: StateType) {

    },

    getState() {
        return this._state
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action:any) {
        profilePageReducer(this._state.profilePage, action)
        dialogsPageReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state)
    }
}

