// import React from 'react'
import React, { useState } from "react";
import Header from '../../Components/Header'
import background from '../../Images/background.webp'
import jaherat from '../../Images/jaherat.webp'
import jaherat2 from '../../Images/jaherat2.webp'
import Footer from '../../Components/Footer';
import { SlPlus } from "react-icons/sl"

export default function Jaherat() {
    const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };
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

            
          <div className="container p-5">
            <div className="row pt-5 ">
                <div className="col-4 image-container">
                    <div className="image-container">
                    <img src={jaherat} alt="jaherat" className="w-100 align-content-end" />
                    <div className="overlay-1">
                                            <div className="text">
                                                <SlPlus className='fs-1 fw-bold'/>
                                            </div>
                                        </div>
                                        </div>
                </div>
                <div className="col-4 bg-">
                <div className="image-container">
                <img src={jaherat2} alt="jaherat" className="w-100 align-content-end" />
                             <div className="overlay-1">
                                            <div className="text">
                                                <SlPlus className='fs-1 fw-bold'/>
                                            </div>
                                        </div>
                                        </div>
                </div>
            </div>
          </div>


</div>

{/* 
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
                            <div className="col-6">
                                <div className='justify-content-end'>
                                    <div className="image-container">
                                        <img
                                            src={jaherat}
                                            alt="Your Description"
                                            className="image-jaherat "
                                        />
                                        <div className="overlay-1">
                                            <div className="text">
                                                <SlPlus className='fs-3'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="row">
                                    <div className="image-container justify-content-end">
                                        <img
                                            src={jaherat2}
                                            alt="Your Description"
                                            className="image-jaherat"
                                        />
                                        <div className="overlay-1">
                                            <div className="text">
                                                <p>જહેરાત માટે સંપર્ક કરો</p>
                                                <p>મો. ૯૭૯૯૬ ૮૮૮૮૧ (ભારતભાઇ પટેલ)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* --------------------------------Footer Section Start ----------------------------------------*/}
            <Footer />
            {/* --------------------------------Footer Section End ----------------------------------------*/}
        </>
    )
}
