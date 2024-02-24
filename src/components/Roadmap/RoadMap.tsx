import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Error404} from "../Error404";
import Profile from "../profile/Profile";
import Dialogs from "../dialogs/Dialogs";
import {ActionsType, StateType} from "../../data/data";

type RoadMapProps = {
    state:StateType
    dispatch:(action:ActionsType)=>void
}

class RoadMap extends React.Component<RoadMapProps> {

    render() {
        const{state,dispatch}=this.props

        return (
            <Routes>
                <Route path={'/profile'} element={ <Profile profilePage={state.profilePage} dispatch={dispatch}/>}/>
                {/*<Route path={'/dialogs'} element={<Dialogs dialogsPage={state.dialogsPage} dispatch={dispatch}/>}/>*/}
                <Route path={'/dialogs/:id'} element={<Dialogs dialogsPage={state.dialogsPage}  dispatch={dispatch}/>}/>


                <Route path={'/*'} element={<Navigate to={'/pageError404'}/>}/>
                <Route path={'/pageError404'} element={<Error404/>}/>
            </Routes>
        );
    }
}

export default RoadMap;