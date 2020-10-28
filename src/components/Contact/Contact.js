import React from 'react';

import Mail from '../../assets/img/send-mail.png';

import './Contact.scss';

const Contact = () => {
    // const { name = '', email = '', phoneNumber = '', message = '' };

    return (
        <section className="container-fluid contact" id="contact-section">
            <h1 className="contact_title">Get in touch!</h1>
            <div className="row">
                <div className="col-5 pl-5">
                    <form method="post" action="mailto:martinherrera.g96@gmail.com">
                        <div className="form-group">
                            <input className="form-control" type="text" name="name"  placeholder="Name"/>
                        </div>

                        <div className="form-group">
                            <input className="form-control" type="email" name="email"  placeholder="Email"/>
                        </div>

                        <div className="form-group">
                            <input className="form-control" type="text" name="phoneNumber"  placeholder="Phone Number"/>
                        </div>

                        <div className="form-group">
                            <textarea className="form-control" type="text" name="message"  placeholder="Message"/>
                        </div>

                        <div className="form-group mb-5">
                            <button className="btn btn-primary text-center">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="offset-1 col-6 img-side">
                    <img className="send-mail-img" src={ Mail } alt="Mail image" />
                </div>
            </div>
        </section>
    );
}

export default Contact;
