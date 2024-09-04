import React from 'react'
import Header from '../../Components/Header';
import background from '../../Images/background.webp'
import { SlPlus } from "react-icons/sl"
import Gal13 from '../../Images/Gal13.jpeg'
import Gal14 from '../../Images/Gal14.jpeg'
import Gal15 from '../../Images/Gal15.jpeg'
import Event27 from '../../Images/Event27.jpeg';
import Footer from '../../Components/Footer';


export default function Event4() {
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
                
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <img src={Event27} className='h-75' />
                            <div className="row mt-3">
                                <h2 className='fw-bold' style={{ color: '#041d57' }}>અમદાવાદ ક્રિકેટ ટુર્નામેન્ટ</h2>
                                <h5 className='mt-3'>2022-03-13</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container">
                    <div className="row mt-3">
                        <h1 className='text-center fw-bolder' style={{ color: '#041d57' }}>ફોટો ગેલેરી</h1>
                        <div className="col-4 image-container mt-4">
                            <div className="image-container">
                                <img src={Gal13} alt="" className="w-100 align-content-end" />
                                <div className="overlay-1">
                                    <div className="text">
                                        <SlPlus className='fs-1 fw-bold' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 image-container mt-4">
                            <div className="image-container">
                                <img src={Gal14} alt="" className="w-100 align-content-end" />
                                <div className="overlay-1">
                                    <div className="text">
                                        <SlPlus className='fs-1 fw-bold' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 image-container mt-4">
                            <div className="image-container">
                                <img src={Gal15} alt="" className="w-100 align-content-end" />
                                <div className="overlay-1">
                                    <div className="text">
                                        <SlPlus className='fs-1 fw-bold' />
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
