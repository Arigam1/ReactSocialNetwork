import React from 'react';
import DialogItem from './DialogItem/Dialogitem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form'

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div >
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}



const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Enter your message' name="newMessageBody" component="textarea" />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;