import React from 'react';
import s from "../dialogs.module.css";
import {MessagesType} from "../../../data/data";


export type MessagesProps = {
    messages:MessagesType[]
}
export const Messages:React.FC<MessagesProps> = (props:MessagesProps) => {
    return (
        <div>
            {
                props.messages.map(el=> {
                    return (
                        <div key={el.id} className={s.message}>{el.message}</div>
                    )
                })
            }

        </div>
    );
};

