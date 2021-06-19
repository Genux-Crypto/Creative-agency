import React from 'react';
import aboutImg from '../../../images/about-img.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFileInvoice, faCubes } from '@fortawesome/free-solid-svg-icons'


// https://i.ibb.co/zGXTjRk/drawing-tablet.png
// https://i.ibb.co/nM52GK2/layers.png

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="row justify-content-between">
                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                    <img src={aboutImg} className="img-fluid" alt="" data-aos="zoom-in"/>
                </div>
                <div className="col-lg-6 pt-5 pt-lg-0">
                    <h3 data-aos="fade-up">ABOUT US</h3>
                    <p data-aos="fade-up" data-aos-delay="100">
                    Tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren
                    </p>
                    <div className="row">
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <img style={{width:'80px'}} src='https://i.ibb.co/zGXTjRk/drawing-tablet.png' alt="" />
                        <h4>Corporis voluptates sit</h4>
                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                        {/* <FontAwesomeIcon icon={faCubes} /> */}
                        <img style={{width:'80px'}} src='https://i.ibb.co/nM52GK2/layers.png' alt="" />
                        <h4>Ullamco laboris nisi</h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </section>
    );
};

export default About;