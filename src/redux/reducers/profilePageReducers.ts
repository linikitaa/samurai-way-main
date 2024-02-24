import {ProfilePageType} from "../../data/data";
import {v1} from "uuid";

export const profilePageReducer = (state: ProfilePageType, action: ProfileActionsType):ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {

            let newPost = {id: v1(), message: action.newPost, likesCount: '0'}
            return {...state, posts:[newPost,...state.posts]}
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state,newValueForPost:action.value}
        }
        default:
            return state
    }
}

export type ProfileActionsType =
    | ReturnType<typeof updatePostAC>
    | ReturnType<typeof addPostAC>
export const addPostAC = (newPost: string) => {
    return {
        type: 'ADD-POST',
        newPost
    } as const
}
export const updatePostAC = (value: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        value
    } as const
}
