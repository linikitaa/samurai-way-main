import React, {ChangeEvent} from 'react';
import s from './dialogs.module.css'
import {Dialog} from "./dialog/Dialog";
import {ActionsType, DialogsPageType} from "../../data/data";
import {addMessageAC, updateMessageAC} from "../../redux/reducers/dialogsPageReducer";

type DialogsType = {
    dialogsPage:DialogsPageType
    dispatch: (action:ActionsType) => void
}

class Dialogs extends React.Component<DialogsType>{


    render() {
        const{dialogsPage,dispatch} = this.props

        const filteredMessage =(dialogsPage.messages.filter(el=> el.userId === '1'))

        const onChangeValueMessage = (e:ChangeEvent<HTMLInputElement>) => {
            dispatch(updateMessageAC(e.currentTarget.value))
        }
        const onClickAddNewMessage = () => {
            dispatch(addMessageAC(dialogsPage.newValueForMessage))
        }
        return (
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <Dialog  dialogs={dialogsPage.dialogs}/>
                </div>
                <div className={s.messages}>
                    <div>
                        {/*{*/}
                        {/*    filteredMessage.length*/}
                        {/*        ? filteredMessage.map(el=> <div key={el.id}>{el.message}</div>)*/}
                        {/*        :<div>Dialog Empty</div>*/}
                        {/*}*/}
                        {
                            dialogsPage.messages.map(el=>{
                                return (
                                    <div key={el.id}>{el.message}</div>
                                )
                            })
                        }

                    </div>
                    <div>
                        <input onChange={onChangeValueMessage}
                               value={dialogsPage.newValueForMessage}
                        />
                        <button onClick={onClickAddNewMessage}>add</button>
                    </div>
                </div>

            </div>
        );
    }
}
export default Dialogs;


// render() {
//     const params = useParams<ParamsType>()
//     const filteredMessage =(this.props.messagesPage.messages.filter(el=> el.userId === params.id))
//
//     return (
//         <div className={s.dialogs}>
//             <div className={s.dialogItems}>
//                 <Dialog  dialogs={this.props.messagesPage.dialogs}/>
//             </div>
//             <div className={s.messages}>
//                 {
//                     filteredMessage.length
//                         ? filteredMessage.map(el=> <div key={el.id}>{el.message}</div>)
//                         :<div>Dialog Empty</div>
//                 }
//             </div>
//         </div>
//     );
// }