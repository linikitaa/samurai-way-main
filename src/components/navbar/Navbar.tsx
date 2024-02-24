import React from 'react';
import s from './navbar.module.css'
import {NavLink} from "react-router-dom";
import {DialogsPageType} from "../../data/data";

export const PATH = {
    profile:"/profile",
    dialogs:"/dialogs"
}
type NavbarProps = {
    dialogsPage:DialogsPageType
}
class Navbar extends React.Component<NavbarProps> {
    render() {
        const{dialogsPage}=this.props

        return (
            <nav className={s.navList}>
                <div className={s.navItem}>
                    <NavLink className={({isActive})=>isActive ? s.active :''}
                             to={'/profile'}>Profile
                    </NavLink>
                </div>
                <div className={s.navItem}>
                    <NavLink className={({isActive})=>isActive ? s.active :''}
                             to={`/dialogs/${dialogsPage.dialogs[0].id}`}>Dialogs
                    </NavLink>
                </div>
            </nav>
        )
    }
}

export default Navbar;


// <NavLink to={'/page/0'}> Page-1</NavLink>

// <div className={s.navItem}><NavLink className={({isActive})=>isActive ? s.active :''} to="/news">News</NavLink></div>
// <div className={s.navItem}><NavLink className={({isActive})=>isActive ? s.active :''} to="/music">Music</NavLink></div>
// <div className={s.navItem}><NavLink className={({isActive})=>isActive ? s.active :''} to="/settings">Settings</NavLink></div>


// const Navbar = () => {
//     return (
//         <nav className={s.navList}>
//             <div className={s.navItem}>
//                 <NavLink className={({isActive})=>isActive ? s.active :''}
//                          to={'/profile'}>Profile
//                 </NavLink>
//             </div>
//             <div className={s.navItem}>
//                 <NavLink className={({isActive})=>isActive ? s.active :''}
//                          to={'/dialogs'}>Dialogs
//                 </NavLink>
//             </div>
//         </nav>
//     );
// };