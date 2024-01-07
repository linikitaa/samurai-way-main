import React from 'react';
import s from "../dialogs.module.css";
import {NavLink} from "react-router-dom";

export type dialofProps = {
    name:string
    id:string

}
export const Dialog:React.FC<dialofProps> = (props) => {
    let{name,id}=props
    return (
        <div className={s.dialogItems}>
            <NavLink to={'/dialogs/' + id} className={s.dialog}>
                {name}
            </NavLink>
        </div>
    );
};

