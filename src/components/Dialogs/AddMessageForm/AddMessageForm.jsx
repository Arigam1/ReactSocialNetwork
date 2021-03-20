import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import s from '../../common/Paginator/Paginator.module.css'

const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.addMessageForm}>
            <div>
                <Field placeholder='Enter your message' name="newMessageBody" component={Textarea} validate={[required, maxLength30]} />
            </div>
            <div >
                <button className={s.justBtn}>Login</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)