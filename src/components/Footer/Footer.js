import React from 'react';
import { Link } from "react-scroll";

import { BsShiftFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="d-flex justify-content-center">
                <button className="mt-5 border-0 footer_btn">
                    <Link
                        className="footer_btn--link"
                        activeClass="active"
                        to="header-section"
                        spy={ true }
                        smooth={ true }
                        offset={ -100 }
                        duration={ 1000 }
                    >
                        <BsShiftFill />
                    </Link>
                </button>
            </div>
            <div className="row text-center w-100 ml-0">
                <div className="col-12 mt-3 p-0">
                    <a className="footer_social-icon" href="https://www.linkedin.com/in/herreragmartin/" target="_blank">
                        <FaLinkedin />
                    </a>
                    <a className="footer_social-icon" href="https://github.com/martinhg" target="_blank">
                        <FaGithubSquare />
                    </a>
                </div>
                <div className="col-12 mt-4 p-0">
                    <p>Copyright &copy; 2020. All right reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
