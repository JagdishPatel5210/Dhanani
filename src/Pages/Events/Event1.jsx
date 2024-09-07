import React from 'react'
import Header from '../../Components/Header';
import background from '../../Images/background.webp'
import Event_1 from '../../Images/Event_1.webp'
import gal_1 from '../../Images/gal_1.webp'
import { SlPlus } from "react-icons/sl"
import Footer from '../../Components/Footer';



export default function Event1() {
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
                            <img src={Event_1} className='h-75' />
                            <div className="row mt-3">
                                <h2 className='fw-bold' style={{ color: '#041d57' }}>વિકાસ ટ્ર્સ્ટ જનરલ સભા</h2>
                                <h5 className='mt-3'>2022-02-01</h5>
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
                                <img src={gal_1} alt="Event1" className="w-100 align-content-end" />
                                <div className="overlay-1">
                                    <div className="text">
                                        <SlPlus className='fs-1 fw-bold' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 image-container mt-4">
                            <div className="image-container">
                                <img src={gal_1} alt="Event1" className="w-100 align-content-end" />
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
