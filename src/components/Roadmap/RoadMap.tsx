import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Profile} from "../profile/Profile";
import {Dialogs} from "../dialogs/Dialogs";
import {Error404} from "../Error404";
import {RootStateType} from "../../data/data";

type RoadMapProps = {
    data:RootStateType
}

const RoadMap = (props:RoadMapProps) => {
    return (
        <Routes>
            <Route path={'/profile'} element={ <Profile posts={props.data.profilePage.posts}/>}/>
            <Route path={'/dialogs'} element={<Dialogs messagesPage={props.data.messagesPage}/>}/>
            <Route path={'/dialogs/:id'} element={<Dialogs messagesPage={props.data.messagesPage}/>}/>


            <Route path={'/*'} element={<Navigate to={'/pageError404'}/>}/>
            <Route path={'/pageError404'} element={<Error404/>}/>
        </Routes>
    );
};

export default RoadMap;