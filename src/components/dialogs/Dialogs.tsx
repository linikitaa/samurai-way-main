import React from 'react';
import s from './dialogs.module.css'
import {Dialog} from "./dialog/Dialog";
import {Messages} from "./message/Messages";


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog name={'Valera'} id={'1'}/>
                <Dialog name={'Sveta'} id={'2'}/>
                <Dialog name={'Andrey'} id={'3'}/>
                <Dialog name={'Masha'} id={'4'}/>
                <Dialog name={'Petya'} id={'5'}/>
                <Dialog name={'Viktor'} id={'6'}/>
            </div>
            <div className={s.messages}>
                <Messages name={'Hi'}/>
                <Messages name={'How are you'}/>
                <Messages name={'Yoo'}/>
            </div>
            {/*<Routes>*/}
            {/*    <Route path={'/dialogs/dialog1'} element={<Dialog1/>}/>*/}
            {/*</Routes>*/}
        </div>
    );
};

