import {v1} from "uuid";
import {DialogsPageType} from "../../data/data";

export const dialogsPageReducer = (state: DialogsPageType, action: DialogsActionsType):DialogsPageType => {
    switch (action.type) {
        case 'ADD-NEW-MESSAGE': {
            let newMessage = {id: v1(), userId: "66", message: action.message}
            return {...state, messages:[...state.messages,newMessage]}
        }
        case 'UPDATE-MESSAGE-TEXT': {
            debugger
            return {...state,newValueForMessage:action.value}
        }
        default:
            return state
    }
}
export type DialogsActionsType =
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateMessageAC>
export const addMessageAC = (message: string) => {
    return {
        type: 'ADD-NEW-MESSAGE',
        message
    } as const
}
export const updateMessageAC = (value: string) => {
    return {
        type: 'UPDATE-MESSAGE-TEXT',
        value
    } as const
}
