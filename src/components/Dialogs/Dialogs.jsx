import React from 'react';
import DialogItem from './DialogItem/Dialogitem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map ( d => <DialogItem name={d.name} id ={d.id}/> );
    let messagesElements = state.messages.map (m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea 
                        onChange = {onNewMessageChange}
                        ref={newMessageElement}
                        value={newMessageBody}>
                    </textarea>
                </div>
                <div>
                    <button onClick = {onSendMessageClick}> send </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;