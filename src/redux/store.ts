import {postsReducer} from "./reducers/postsReducer";
import {createStore} from "redux";

const combineReducers = {
    post:postsReducer
}


