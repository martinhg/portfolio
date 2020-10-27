import React from 'react';

import Programmer from '../../assets/img/programmer.png';

import './Header.scss';

const Header = () => {
    return (
        <section className="container" id="header-section">
            <div className="row">
                <div className="col-7 align-self-center">
                    <h1 className="title">Hi, <br/>
                        I'm <span className="name-color">Martin Herrera</span>
                    </h1>
                    <h2 className="job-title">Fullstack Developer</h2>
                    <i className="phrase">"Programming gives me the freedom to create and do whatever I imagine"</i>
                </div>
                <div className="col-5">
                    <img src={ Programmer } alt="Programmer"/>
                </div>
            </div>
        </section>
    );
}

export default Header;
