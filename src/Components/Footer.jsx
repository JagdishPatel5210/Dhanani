import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { IoHome } from 'react-icons/io5';
import { MdEmail, MdPhoneInTalk } from 'react-icons/md';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footerPage'>
            <div className="container-fluid footer mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4  mt-5">
                            <div className='row'>
                                <div className='col-12'>
                                    <h5 className='text-white fs-5 pt-3 fw-bold'>અમારો સંપર્ક કરો</h5>
                                </div>

                                <div className="d-flex mt-4">
                                    <IoHome color='white' className='address' size={30} />
                                    <p className='ps-3 text-white footer-text'>  શ્રી દ્વારકેશ ભવન અવસર પાર્ટી પ્લોટની પાછળ, મોઢેરા રોડ, મહેસાણા.</p>
                                </div>

                                <div className="d-flex mt-2">
                                    <MdPhoneInTalk color='white' className='contact' size={30} />
                                    <p className='ps-3 text-white footer-text'>  +91 99250 75880</p>
                                </div>

                                <div className="d-flex mt-2">
                                    <MdEmail color='white' className='mailID' size={30} />
                                    <p className='ps-3 text-white footer-text'> SilverTech@gmail.com</p>
                                </div>
                                {/* <div className="d-flex mt-1">
                                <FaFacebook color='white' className='' size={25} />
                            </div> */}
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-lg-3 mt-5 px-4">
                            <h5 className='text-white fs-5 pt-3 fw-bold'>અમારા વિશે</h5>
                            <ul className='text-white pt-3 footer-li'>
                                <Link to="/MainPage">
                                    <li className='fw-light'>
                                        <IoIosArrowForward size={20} className='me-2' />
                                        હોમ
                                    </li>
                                </Link>
                                <Link to='/AmaraVishe'>
                                    <li className='pt-2 fw-light footer-li'>
                                        <IoIosArrowForward size={20} className='me-2' />
                                        અમારા વિશે
                                    </li>
                                </Link>
                                <Link to='/Karobari'>
                                    <li className='pt-2 fw-light footer-li'>
                                        <IoIosArrowForward size={20} className='me-2' />
                                        કારોબારી સભ્યો
                                    </li>
                                </Link>
                                <Link to='/SamajNaSabhyo'>
                                    <li className='pt-2 fw-light footer-li'>
                                        <IoIosArrowForward size={20} className='me-2' />
                                        સમાજના સભ્યો
                                    </li>
                                </Link>
                                <Link>
                                    <li className='pt-2 fw-light footer-li'>
                                        <IoIosArrowForward size={20} className='me-2' />
                                        પસંદગી માટે
                                    </li>
                                </Link>
                                <Link>
                                    <li className='pt-2 fw-light footer-li'>
                                        <IoIosArrowForward size={20} className='me-2' />
                                        ઇવેન્ટ્સ
                                    </li>
                                </Link>
                                <Link to='/Jaherat'>
                                    <li className='pt-2 fw-light footer-li'>
                                        <IoIosArrowForward size={20} className='me-2' />
                                        જાહેરાત
                                    </li>
                                </Link>
                                <Link to='/ContactUs'>
                                    <li className='pt-2 fw-light footer-li'>
                                        <IoIosArrowForward size={20} className='me-2' />
                                        અમારો સંપર્ક કરો
                                    </li>
                                </Link>
                            </ul>
                        </div>



                        <div className="col-lg-5 mt-5 " >
                            <h5 className='text-white fs-5 pt-3 fw-bold mb-2'>તાજેતરના સમાચાર</h5>
                            <marquee behavior="" direction="up" scrollamount="3" hight="250">
                                <ul>
                                    <li className='text-white px-2 fs-6 bg-brown rounded-2'>
                                        <p className='p-2 footer-news'>આપના પુત્ર અથવા પુત્રીનો સબંધ થાય ત્યારે વહેલામાં વહેલી તકે આપનુ ફોમઁ રદ કરાવો</p>
                                    </li>

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
        </div>
    )
}
