import {dialogsPageReducer} from "./reducers/dialogsPageReducer";
import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./reducers/profilePageReducers";

const rootReducer = combineReducers({
    profile: profilePageReducer,
    dialogs: dialogsPageReducer
})

export const store = createStore(rootReducer)
export type RootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store