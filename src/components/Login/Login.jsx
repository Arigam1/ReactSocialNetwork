import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { createField, Input } from '../common/FormsControls/FormsControls'
import { required } from '../utils/validators/validators'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import style from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', "email", Input, [required])}
            {createField('Password', "password", Input, [required], { type: "password" })}
            {createField(null, "rememberMe", Input, [], { type: "checkbox" }, "remember me")}

            { error && <div className={style.formSummoryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) return <Redirect to={"/profile"} />;

    return <div>

        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};

export default connect(mapStateToProps, { login })(Login);