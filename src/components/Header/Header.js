import React from 'react';

import Programmer from '../../assets/img/programmer.png';

import './Header.scss';

const Header = () => {
    return (
        <section className="container header" id="header-section">
            <div className="row align-items-center">
                <div className="col-12 col-md-7 mb-4">
                    <h1 className="header_title">Hi, <br/>
                        I'm <span className="header_title--name">Martin Herrera</span>
                    </h1>
                    <h2 className="header_job-title">Fullstack Developer</h2>
                    <i className="header_phrase">"Programming gives me the freedom to create and do whatever I imagine"</i>
                </div>
                <div className="col-12 col-md-5">
                    <img className="header_img mx-auto d-block" src={ Programmer } alt="Programmer"/>
                </div>
            </div>
        </section>
    );
}

export default Header;
