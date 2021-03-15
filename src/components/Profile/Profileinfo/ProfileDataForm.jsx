import React from "react";
import s from "./ProfileInfo.module.css";
import style from '../../common/FormsControls/FormsControls.module.css'
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={style.formSummoryError}>
            {error}
        </div>
        }
        <div><b>Full name</b>: {createField("Full Name", "fullname", Input, [])}</div>
        <div><b>Looking for a job</b>: {createField("", "LookingForAJob", Input, [], { type: "checkbox" })}</div>
        <div>
            <b>My skills</b>: {createField("My skills", "LookingForAJobDescription", Textarea, [])}
        </div>

        <div><b>About me</b>: {createField("About me", "AboutMe", Textarea, [])}</div>
        <div><b>Constacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField(key, "contacts." + key, Input, [])}</b>
            </div>
        })}</div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;