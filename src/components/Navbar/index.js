import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <>
            <div className={`navbar navbar-expand-lg navbar-dark navbar-custom fixed-top ${props.bgColor}`}>
                <div className="container px-5">
                    <a className="navbar-brand" href="#page-top">{props.logo}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            {
                                props.menu.map((x) => {
                                    return <li className="nav-item"><Link to={x.url} className='nav-link' >{x.name}</Link></li>
                                })
                            }
                            <li className="nav-item"><a className="nav-link" href="/signup">Sign Up</a></li>
                            <li className="nav-item"><a className="nav-link" href="/login">Log In</a></li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    );
}