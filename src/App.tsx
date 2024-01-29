import React, {useReducer} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar, PATH} from "./components/navbar/Navbar";
import { RootStateType, data} from "./data/data";
import RoadMap from "./components/Roadmap/RoadMap";

type AppProps = {
    data:RootStateType
}

function App(props:AppProps) {


    return (
        <div className="app-wrapper">
            <div className={'container'}>
                <Header/>
                <div className={'section'}>
                    <Navbar/>
                    <RoadMap data={props.data}/>
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