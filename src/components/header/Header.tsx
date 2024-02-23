import React from 'react';
import s from './header.module.css'
class Header extends React.Component {
    render() {
        return (
            <header className={s.headerWrapper}>
                <div>Header</div>
            </header>
        );
    }
};

export default Header;