import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Profile} from "./components/profile/Profile";
import {Navbar, PATH} from "./components/navbar/Navbar";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Error404} from "./components/Error404";
import {StateType} from "./data/data";

type AppProps = {
    state:StateType
}

function App(props:AppProps) {
    return (
        <div className="app-wrapper">
            <div className={'container'}>
                <Header/>
                <div className={'section'}>
                    <Navbar/>
                    <Routes>
                        <Route path={PATH.profile} element={<Profile posts={props.state.profilePage.posts}/>}/>
                        <Route path={PATH.dialogs} element={<Dialogs messagesPage={props.state.messagesPage}/>}/>


                        {/*<Route path={'/*'} element={<Navigate to={'/pageError404'}/>}/>*/}
                        {/*<Route path={'/pageError404'} element={<Error404/>}/>*/}
                    </Routes>
                </div>
                <div className={'footer'}>Footer</div>
            </div>
        </div>
    );
}

export default App;

// <NavLink to={'/page/0'}> Page-1</NavLink>
// <Routes>
//     <Route path={'/'} element={<Navigate to={'/page1'}/>} />
//     <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>} />
//     <Route path={'/*'} element={<Navigate to={'/pageError404'}/>} />
//     <Route path={'/pageError404'} element={<Error404/>}/>
// </Routes>