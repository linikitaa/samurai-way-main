import React from 'react';
import s from './dialogs.module.css'
import {Dialog} from "./dialog/Dialog";
import {MessagesPageType} from "../../data/data";
import {Messages} from "./message/Messages";

type DialogsType = {
    messagesPage:MessagesPageType

}

export const Dialogs = (props: DialogsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog dialogs={props.messagesPage.dialogs}/>
            </div>

            <div className={s.messages}>
                <Messages messages={props.messagesPage.messages}/>
            </div>
        </div>
    );
};

{/*<Routes>*/}
{/*    <Route path={'/dialogs/dialog1'} element={<Dialog1/>}/>*/}
{/*</Routes>*/}