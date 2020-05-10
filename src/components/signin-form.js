import React from 'react';
import mail from '../img/mail_white.svg';
import pass from '../img/key_white.svg';
import { Fragment } from 'react';

const SignInForm = ({ 
    onSubmit, 
    onBlur, 
    onChange,  
    value, 
    error,
    mode,
    onSetSignup,
    onSetLogin}) =>{
    return (
            <form onSubmit={onSubmit} className={`${mode}__form`}>
                <div className={`${mode}__form__container`}>
                    <div className={`${mode}__form__signup-label ${mode==="signup"?"unshaded":"shaded"}`}
                        onClick={onSetSignup}>
                            Sign up
                    </div>
                    <div className={`${mode}__form__login-label ${mode==="login"?"unshaded":"shaded"}`}
                        onClick={onSetLogin}>
                        Log in
                    </div>
                </div>
                <div className={`${mode}__form__mail`}>
                    <label htmlFor="mailInput">E-mail</label>
                    <input type="email" 
                        id="mailInput"
                        name="email" 
                        value={value.email}
                        onBlur={onBlur}
                        onChange={onChange} 
                        required>
                    </input>
                    <img src={mail} alt="mail"></img>
                </div>
                <label className="error">
                    {error.email?error.email:""}
                </label>
                <div className={`${mode}__form__pass`}>
                    <label htmlFor="passInput">Password</label>
                    <input type="password" 
                        id="passInput"
                        name="password" 
                        value={value.password}
                        onBlur={onBlur}
                        onChange={onChange} 
                        required>
                    </input>
                    <img src={pass} alt="pass"></img>
                </div>
                <label className="error">
                    {error.password?error.password:""}
                </label>
                {/* <div className="signin__form__pass-conf">
                    <label htmlFor="passConfInput">Confirmation</label>
                    <input type="password" 
                        id="passConfInput"
                        name="password_confirmation" 
                        value={value.password_confirmation}
                        onBlur={onBlur}
                        onChange={onChange} 
                        required>
                    </input>
                    <img src={pass} alt="pass"></img>
                </div>
                <label className="error">
                    {error.password_confirmation?error.password_confirmation:""}
                </label> */}
                <button 
                    type="submit"
                    className={`${mode}__form__submit-button btn`} 
                    //onClick={onSubmit}
                    >
                    Enviar
                </button>
            </form>
    );
};

export default SignInForm;