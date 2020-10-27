import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import { FiAlignRight } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import Logo from '../../assets/img/logo.png';

import './Navbar.scss';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg fixed-top">
            <a 
                class="navbar-brand" 
                href="#home"
                onClick={ () => scroll.scrollToTop() }
            >
                <img className="logo" src={ Logo } alt="Logo" />
            </a>
            <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <FiAlignRight />
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item p-3">
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
                    <li class="nav-item p-3">
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
                    <li class="nav-item p-3">
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
                    <li class="nav-item p-3">
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
            <div className="social-media-icons mr-5">
                <div className="row">
                    <div className="col-4">
                        <a href="https://www.linkedin.com/in/herreragmartin/" target="_blank">
                            <FaLinkedin />
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="https://github.com/martinhg" target="_blank">
                            <FaGithubSquare />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
