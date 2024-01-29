import React from 'react';
import s from './dialogs.module.css'
import {Dialog} from "./dialog/Dialog";
import {data, MessagesPageType, MessagesType} from "../../data/data";
import {Messages} from "./message/Messages";
import {NavLink, useParams} from "react-router-dom";
import {message} from "antd";

type DialogsType = {
    messagesPage:MessagesPageType
}

type DialogItemType = {
    name:string
    id:string
}

type ParamsType = {
    id:string
}
export const DialogItem = (props:DialogItemType) => {
    return <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
}

export const Dialogs = (props: DialogsType) => {
    const params = useParams<ParamsType>()
    const filteredMessage =(props.messagesPage.messages.filter(el=> el.userId === params.id))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog  dialogs={props.messagesPage.dialogs}/>
            </div>
            <div className={s.messages}>
                {/*<Messages messages={props.messagesPage.messages}/>*/}
                {
                    filteredMessage.length
                        ? filteredMessage.map(el=> <div key={el.id}>{el.message}</div>)
                        :<div>Dialog Empty</div>
                }
            </div>
        </div>
    );
};

{/*<Routes>*/}
{/*    <Route path={'/dialogs/dialog1'} element={<Dialog1/>}/>*/}
{/*</Routes>*/}