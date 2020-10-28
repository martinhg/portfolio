import React from 'react';

import ProfilePhoto from '../../assets/img/me.jpeg';

import './About.scss';

const About = () => {
    return (
        <section className="container-fluid about mt-5" id="about-section">
            <h1 className="about_title text-center">About</h1>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="row align-self-center">
                        <div className="col-12 mt-3 mb-5">
                            <img className="about_avatar rounded-circle mx-auto d-block shadow" src={ ProfilePhoto } alt="Profile Photo"/>
                        </div>
                        <div className="col-12 mb-3 text-center">
                            <button className="about_btn-cv btn-lg rounded-pill shadow">Download CV</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 my-4">
                    <p className="about_description">
                        My name is <span>Martín Herrera</span>, I'm a <span>Fullstack Developer </span>
                        with more than 3 years of experience. I worked like <span>frontend </span> 
                        and <span>backend</span> developer in different <span>languages</span>, <span>frameworks</span>, <span>libraries </span>
                        and <span>databases</span>. I'm constantly searching for engaging challenges that
                        make me <span>learn</span> and <span>improve</span> my skils.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
