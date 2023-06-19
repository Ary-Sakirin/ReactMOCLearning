import React from 'react';
import { useState } from 'react';
import style from './signup.module.scss';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Input } from 'reactstrap';
import { InputGroup } from 'reactstrap';
import { InputGroupText } from 'reactstrap';
function Signup() {
    const [typePassword1, setTypePassword1] = useState(true);
    const [eyeIcon1, setEyeIcon1] = useState(false);
    const [typePassword2, setTypePassword2] = useState(true);
    const [eyeIcon2, setEyeIcon2] = useState(false);
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center">
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
                        <div className="col-md-6">
                            <label className="form-label m-0">
                                First Name
                                <span className="" style={{ color: 'red' }}>
                                    *
                                </span>
                            </label>
                            <input
                                for="firstname "
                                type="text"
                                className="form-control"
                                placeholder="First Name"

                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label m-0">Last Name</label>
                            <input
                                for="lastname "
                                type="text"
                                className="form-control"
                                placeholder="Last Name"

                            />
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
                        <p
                            className=""
                            style={{ fontSize: '13px', margin: '0px', color: 'gray' }}
                        >
                            Must be at least 8 characters, 1 uppercase, 1 lowercase & 1 number
                        </p>
                        <div className="col-12">
                            <label for="password" className="form-label m-0 ">
                                Confirm Password
                                <span className="" style={{ color: 'red' }}>
                                    *
                                </span>
                            </label>
                            <InputGroup>
                                <Input
                                    type={typePassword2 ? 'password' : 'text'}
                                    placeholder="Confirm Password"
                                    style={{ borderRight: 'none' }}
                                />
                                <InputGroupText
                                    style={{
                                        background: 'transparent',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => {
                                        setEyeIcon2(!eyeIcon2);
                                        setTypePassword2(!typePassword2);
                                    }}
                                >
                                    {eyeIcon2 ? <AiFillEye /> : <AiFillEyeInvisible />}
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
                                    keep me updated about new featureas & upcoming improvements (by
                                    doing this you accept the &nbsp;
                                    <span>
                                        <Link>tems</Link>
                                    </span>
                                    &nbsp; and the &nbsp;
                                    <span>
                                        <Link>privacy policy</Link>
                                    </span>
                                    ) .
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%' }}
                            >
                                Let's start
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Signup;