import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { createField, Input } from '../common/FormsControls/FormsControls'
import { required } from '../utils/validators/validators'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import style from '../common/FormsControls/FormsControls.module.css'
import s from '../common/Paginator/Paginator.module.css'

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit} className={style.login_forms}>
            <div className={style.login_form}>{createField('Email', "email", Input, [required])}</div>
            <div className={style.login_form}>{createField('Password', "password", Input, [required], { type: "password" })}</div>
            <div className={style.login_form}>{createField(null, "rememberMe", Input, [], { type: "checkbox" }, "REMEMBER ME")}</div>


            {captchaUrl && <img src={captchaUrl} />}
            <div className={style.login_form}>{captchaUrl && createField("symbols by image", "captcha", Input, [required], {})}</div>

            {error && <div className={style.formSummoryError}>
                {error}
            </div>
            }
            <div className={s.loginBlock}>
                <button className={s.justBtn}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) return <Redirect to={"/profile"} />;

    return <div>

        <h1 className={style.login_header}>LOGIN</h1>
        <div className={style.login_forms}>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    </div>
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
    };
};

export default connect(mapStateToProps, { login })(Login);