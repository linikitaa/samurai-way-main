import React from 'react';
import s from "../dialogs.module.css";


export type MessagesProps = {
    name:string
}
export const Messages:React.FC<MessagesProps> = (props) => {
    return (
        <div>
            <div className={s.dialog}>{props.name}</div>
        </div>
    );
};

