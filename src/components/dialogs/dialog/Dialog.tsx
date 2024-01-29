import React from 'react';
import s from "../dialogs.module.css";
import {NavLink, useParams} from "react-router-dom";
import {DialogsType, MessagesPageType} from "../../../data/data";

type DialogProps = {
    dialogs: DialogsType[]
}
export const Dialog: React.FC<DialogProps> = (props) => {
    let {dialogs} = props

    return (
        <div className={s.dialogItems}>
            {
                dialogs.map(el => {
                    return (
                        <NavLink
                            to={`/dialogs/${el.id}`}
                            key={el.id}
                            className={s.dialog}>{el.name}</NavLink>
                    )
                })
            }

        </div>
    );
};

