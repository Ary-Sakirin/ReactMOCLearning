import React from 'react';
import { useState } from 'react';
import style from './login.module.scss';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Input } from 'reactstrap';
import { InputGroup } from 'reactstrap';
import { InputGroupText } from 'reactstrap';
function Login() {
    const [typePassword1, setTypePassword1] = useState(true);
    const [eyeIcon1, setEyeIcon1] = useState(false);
    const [typePassword2, setTypePassword2] = useState(true);
    const [eyeIcon2, setEyeIcon2] = useState(false);
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className={` ${style.wrapper}`}>
                    <form className={`row g-3 ${style.form_signin}`}>
                        <div className="col-12">
                            <div class="d-flex justify-content-center">
                                <img
                                    src="https://assets.super.so/e7c0f16c-8bd3-4c76-8075-4c86f986e1b2/images/32f3a89c-99c4-466f-8536-dd75f65fa320/Strapi-Monogram.png"
                                    alt=""
                                    style={{ width: '60px', margin: 'autuo' }}
                                />
                            </div>
                            <h3 className="text-center mt-3">Welcome to Strapi!</h3>
                            <p className="text-center">
                                Credentials are only used to authenticate in strapi. All saved
                                data will be stored in your database.
                            </p>
                        </div>
                        <div className="col-12">
                            <label for="email" className="form-label m-0">
                                Email
                                <span className="" style={{ color: 'red' }}>
                                    *
                                </span>
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="col-12">
                            <label for="password" className="form-label m-0">
                                Password
                                <span className="" style={{ color: 'red' }}>
                                    *
                                </span>
                            </label>
                            <InputGroup>
                                <Input
                                    type={typePassword1 ? 'password' : 'text'}
                                    placeholder="Password"
                                    style={{ borderRight: 'none' }}
                                />
                                <InputGroupText
                                    style={{
                                        background: 'transparent',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => {
                                        setEyeIcon1(!eyeIcon1);
                                        setTypePassword1(!typePassword1);
                                    }}
                                >
                                    {eyeIcon1 ? <AiFillEye /> : <AiFillEyeInvisible />}
                                </InputGroupText>
                            </InputGroup>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="gridCheck"
                                />
                                <label
                                    className="form-check-label"
                                    for="gridCheck"
                                    style={{ fontSize: '15px' }}
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%' }}
                            >
                                Login
                            </button>
                        </div>
                        <Link className="text-end">Forgot your password?</Link>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;