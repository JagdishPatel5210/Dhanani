import React from 'react'
import Header from '../../Components/Header'
import background from '../../Images/background.webp'
import Footer from '../../Components/Footer';
import { RiLoginCircleFill } from 'react-icons/ri';

export default function ContactUs() {
    debugger
    return (
        <>
            {/* // - ------------------------- Header Start -------------------------- */}
            <Header />
            {/* -------------------------- Header end -------------------------- */}

            <div className='container-fluid' >
                <div className="row d-block">
                    <div className="parallax" style={{ backgroundImage: `url(${background})`, position: 'relative', height: '30vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', }}>
                        <div className="overlay" style={{ position: 'absolute', zIndex: '1', }}>

                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-5">
                    <div className="container">
                            <div className="row">
                            <div className="col-12">
                                <div className="contact-form-container">
                                    <div className="form-section">
                                        <h2>Drop us a line</h2>
                                        <form className='pt-3'>
                                            <div className="form-group">
                                                <input type="text" name="name" placeholder='નામ' required />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder='ઈમેલ' required />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="villageName" placeholder='ગામ નું નામ' required />
                                            </div>
                                            <div className="form-group">
                                                <input type="tel" name="mobileNumber" placeholder='મોબાઈલ નંબર' required />
                                            </div>
                                            <div className="form-group">
                                                <textarea name="message" rows="4" placeholder='આપનું સૂચન' required></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-success">
                                                <RiLoginCircleFill size={17} className='me-2' />
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                
                                    <div className="map-section">
                                        {/* Embed Google Map */}
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.4828682396975!2d-122.08424908440773!3d37.42199997982547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb76e51662db7%3A0x7bfa43e6e7888f0e!2sGoogleplex!5e0!3m2!1sen!2sin!4v1630765699894!5m2!1sen!2sin"
                                            width="100%"
                                            height="450"
                                            allowFullScreen=""
                                            loading="lazy"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --------------------------------Footer Section Start ----------------------------------------*/}
            <Footer />
            {/* --------------------------------Footer Section End ----------------------------------------*/}
        </>
    )
}
