import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import { FiAlignRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import Logo from '../../assets/img/logo.png';

import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg fixed-top">
                <a 
                    className="navbar-brand" 
                    href="#home"
                    onClick={ () => scroll.scrollToTop() }
                >
                    <img className="navbar_logo" src={ Logo } alt="Logo" />
                </a>
                <div className="social-media-icons ml-5">
                    <div className="row">
                        <div className="col-6">
                            <a href="https://www.linkedin.com/in/herreragmartin/" target="_blank">
                                <FaLinkedin />
                            </a>
                        </div>
                        <div className="col-6">
                            <a href="https://github.com/martinhg" target="_blank">
                                <FaGithubSquare />
                            </a>
                        </div>
                    </div>
                </div>
                <button className="navbar-toggler border-0 navbar_btn pr-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <FiAlignRight />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item p-3">
                            <Link
                                activeClass="active"
                                to="header-section"
                                syp={ true }
                                smooth={ true }
                                offset={ -70 }
                                duration={ 1000 }
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link
                                activeClass="active"
                                to="about-section"
                                syp={ true }
                                smooth={ true }
                                offset={ -57 }
                                duration={ 1000 }
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link
                                activeClass="active"
                                to="projects-section"
                                syp={ true }
                                smooth={ true }
                                offset={ -53 }
                                duration={ 1000 }
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link
                                activeClass="active"
                                to="contact-section"
                                syp={ true }
                                smooth={ true }
                                offset={ -50 }
                                duration={ 1000 }
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
