import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { IoHome } from 'react-icons/io5';
import { MdEmail, MdPhoneInTalk } from 'react-icons/md';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footerPage pt-3'>
            <div className="container-fluid footer border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 py-4">
                            <div className='row'>
                                <div className='col-12'>
                                    <h5 className='text-white fs-5 pt-3 fw-bold'>અમારો સંપર્ક કરો</h5>
                                </div>

                                <div className="d-flex mt-4">
                                    <IoHome  className='address text-light' size={30} />
                                    <p className='ps-3 text-white footer-text'> અમરાપુર </p>
                                </div>

                                <div className="d-flex mt-2">
                                    <MdPhoneInTalk  className='contact text-light' size={30} />
                                    <p className='ps-3 text-white footer-text'>  +91 96873 82647</p>
                                </div>

                                <div className="d-flex mt-2">
                                    <MdEmail  className='mailID text-light' size={30} />
                                    <p className='ps-3 text-white footer-text'> SilverTech@gmail.com</p>
                                </div>
                                {/* <div className="d-flex mt-1">
                                <FaFacebook color='white' className='' size={25} />
                            </div> */}
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-lg-3 my-4 px-4 ">
                            <h5 className='text-white fs-5 pt-3 fw-bold'>અમારા વિશે</h5>
                            <ul className='text-white pt-3 footer-li'>
                                    <li className='fw-light'>
                                        <IoIosArrowForward size={20} className='me-2' />
                                      <Link to='/MainPage'> હોમ </Link>
                                    </li>
                               
                                    <li className='pt-2 fw-light footer-li'>
                                        <IoIosArrowForward size={20} className='me-2' />
                                        <Link to='#'> અમારા વિશે </Link>
                                    </li>
                              
                                    <li className='pt-2 fw-light footer-li'>
                                        <IoIosArrowForward size={20} className='me-2' />
                                        <Link to='/Karobari'>કારોબારી સભ્યો </Link>
                                    </li>
                                
                                    <li className='pt-2 fw-light footer-li'>
                                        <IoIosArrowForward size={20} className='me-2' />
                                        <Link to='#'> સમાજના સભ્યો </Link>
                                    </li>
                               
                                    <li className='pt-2 fw-light footer-li'>
                                        <IoIosArrowForward size={20} className='me-2' />
                                        <Link to='#'> પસંદગી માટે </Link>
                                    </li>
                               
                                    <li className='pt-2 fw-light footer-li'>
                                        <IoIosArrowForward size={20} className='me-2' />
                                        <Link to='#'>  ઇવેન્ટ્સ </Link>
                                    </li>
                               
                                    <li className='pt-2 fw-light footer-li'>
                                        <IoIosArrowForward size={20} className='me-2' />
                                        <Link to='#'> જાહેરાત </Link>
                                    </li>
                              
                                    <li className='pt-2 fw-light footer-li'>
                                        <IoIosArrowForward size={20} className='me-2' />
                                        <Link to='/ContactUs'>  અમારો સંપર્ક કરો </Link>
                                    </li>
                            
                            </ul>
                        </div>



                        <div className="col-lg-5 my-4" >
                            <h5 className='text-white fs-5 pt-3 fw-bold mb-2'>તાજેતરના સમાચાર</h5>
                            <marquee behavior="" direction="up" scrollamount="3" hight="250">
                                <ul>
                                    <li className='text-white px-2 bg-brown fs-6 rounded-2' >
                                        <p className='p-2 footer-news'>કોઈ પણ પ્રકારની ભૂલ જણાય તો અમને આપની માહિતી ૯૭૭૩૧૨૪૫૯૮ (SILVER TECHNOLOGIES) પર WhatsApp કરી આપવી. (કોલ કરવો નહી.)</p>
                                    </li>

                                    <li className='text-white px-2 bg-brown fs-6 rounded-2'>
                                        <p className='p-2 footer-news'>તમે મોકલેલા ફોર્મમાં અમારા દ્વાર થયેલી ભૂલ ને જ હાલ બદલી આપવામાં આવશે. અન્ય માહિતી અપડેટ કરવા માટે આપને સમય જણાવવામાં આવશે. જેની જાણ વેબસાઈટ પર કરવામાં આવશે.</p>
                                    </li>
                                </ul>
                            </marquee>
                        </div>
                    </div> 
                </div>
            </div>

    <div className='container-fluid bg-danger'>
      <div className="container">
        <div className="row">
            <div className="col-lg-6 col-sm-12 d-flex">
            <h6 className='pt-2 text-light'> Developed & Maintained by <span className='foot'> Jasani Corporation </span> 
             <Link className='corpohover'> <MdEmail className='fs-4'/> jasanicorp@gmail.com</Link></h6>
            </div>
            <div className="col-lg-6 col-sm-12 justify-content-end d-flex">
            <h6 className='pt-2 text-light'> Rahul Jasani  <Link className='corpohover'> <MdPhoneInTalk className='fs-4'/> +91 96873 82647</Link> </h6>
            </div>
        </div>
      </div>
      </div> 

        </div>
    )
}

