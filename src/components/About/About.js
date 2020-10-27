import React from 'react';

import ProfilePhoto from '../../assets/img/me.jpeg';

import './About.scss';

const About = () => {
    return (
        <section className="container-fluid about" id="about-section">
            <h1 className="about_title text-right">About</h1>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <div className="col-12 my-5">
                            <img className="about_avatar" src={ ProfilePhoto } alt="Profile Photo"/>
                        </div>
                        <div className="col-12 mb-5">
                            <button className="about_btn-cv">Download CV</button>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <p>Loremipmsadsafdadidsfdsodnsfjldskfdnsofijldsfonidsjfdsoifdk</p>
                </div>
            </div>
        </section>
    );
}

export default About;
