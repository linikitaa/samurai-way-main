import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Profile} from "./components/profile/Profile";
import {Navbar} from "./components/navbar/Navbar";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="app-wrapper">
                <div className={'container'}>
                    <Header/>
                    <Navbar/>
                    <div className={'app-wrapper-content'}>
                        <Route path={'/profile'} component={Profile}/>
                        <Route path={'/dialogs'} component={Dialogs}/>

                        {/*<Profile/>*/}
                        {/*<Dialogs/>*/}
                    </div>

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