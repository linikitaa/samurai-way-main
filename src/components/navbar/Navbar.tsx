import React from 'react';
import s from './navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.navList}>
            <div className={s.navItem}><a href="/profile">Profile</a></div>
            <div className={s.navItem}><a href="/dialogs">Messages</a></div>
            <div className={s.navItem}><a href="">News</a></div>
            <div className={s.navItem}><a href="">Music</a></div>
            <div className={s.navItem}><a href="">Settings</a></div>
        </nav>
    );
};

