import React from 'react';
import './App.css';

import {ActionsType, StateType, store} from "./data/data";

import Header from "./components/header/Header";
import RoadMap from "./components/Roadmap/RoadMap";
import Navbar from "./components/navbar/Navbar";

type AppProps = {
    state: StateType
    dispatch: (action:ActionsType) => void

}

class App extends React.Component<AppProps> {
    render() {

        const{state,dispatch} = this.props

        return (
            <div className="app-wrapper">
                <div className={'container'}>
                    <Header/>
                    <div className={'section'}>
                        <Navbar dialogsPage={state.dialogsPage} />
                        <RoadMap state={store.getState()} dispatch={dispatch}/>
                    </div>
                    <div className={'footer'}>Footer</div>
                </div>
            </div>
        )
    }
}

export default App;

// function App(props:AppProps) {
//
//
//     return (
//         <div className="app-wrapper">
//             <div className={'container'}>
//                 <Header/>
//                 <div className={'section'}>
//                     <Navbar/>
//                     <RoadMap data={props.data} addPost={props.addPost}/>
//                 </div>
//                 <div className={'footer'}>Footer</div>
//             </div>
//         </div>
//     );
// }