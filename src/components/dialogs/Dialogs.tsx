import React from 'react';
import s from './dialogs.module.css'
import {Dialog} from "./dialog/Dialog";
import {MessagesPageType} from "../../data/data";

type DialogsType = {
    messagesPage:MessagesPageType
}

type ParamsType = {
    id:string
}

class Dialogs extends React.Component<DialogsType>{


    render() {
        const filteredMessage =(this.props.messagesPage.messages.filter(el=> el.userId === el.id))

        return (
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <Dialog  dialogs={this.props.messagesPage.dialogs}/>
                </div>
                <div className={s.messages}>
                    {
                        filteredMessage.length
                            ? filteredMessage.map(el=> <div key={el.id}>{el.message}</div>)
                            :<div>Dialog Empty</div>
                    }
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