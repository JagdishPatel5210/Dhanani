import React from 'react'
import { FcHome } from "react-icons/fc";
import { FcMissedCall } from "react-icons/fc";
import { BsEnvelope } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";

export default function Footer() {
    return (
        <div>
            <div className="container-fluid footer">
                <div className="container">
                    <div className="row">
                        <div className="col-4 mt-5">
                            {/* <div className="row mt-5 "> */}
                            <h5 className='text-white pt-3 fw-bold'>અમારો સંપર્ક કરો</h5>
                            <div className="d-flex mt-4">
                                <FcHome className='fs-4 ' />
                                <p className='ps-3 text-white fs-6'>  શ્રી દ્વારકેશ ભવન અવસર પાર્ટી પ્લોટની પાછળ, મોઢેરા રોડ, મહેસાણા.</p>
                            </div>

                            <div className="d-flex">
                                <FcMissedCall className='fs-4 ' />
                                <p className='ps-3 text-white fs-6'>  +91 99250 75880</p>
                            </div>

                            <div className="d-flex">
                                <i className='text-white'><BsEnvelope className='fs-4' /></i>
                                <p className='ps-3 text-white fs-6'>  15gamkpsmain@gmail.com</p>
                            </div>

                            <div className="d-flex mt-2">
                                <i className='text-white'><FaFacebook className='fs-4' /></i>
                            </div>
                            {/* </div> */}
                        </div>
                        <div className="col-3 mt-5 px-4">
                            <h5 className='text-white pt-3 fw-bold'>અમારા વિશે</h5>
                            <ul className='text-light list-unstyled'>
                                <li>હોમ</li>
                                <li className='pt-2'>અમારા વિશે</li>
                                <li className='pt-2'>કારોબારી સભ્યો</li>
                                <li className='pt-2'>સમાજના સભ્યો</li>
                                <li className='pt-2'>પસંદગી માટે</li>
                                <li className='pt-2'>ઇવેન્ટ્સ</li>
                                <li className='pt-2'>જાહેરાત</li>
                                <li className='pt-2'>અમારો સંપર્ક કરો</li>
                            </ul>
                        </div>

                        <div className="col-5 mt-5 " >
                            <h5 className='text-white pt-3 fw-bold '>તાજેતરના સમાચાર</h5>
                            <marquee behavior="" direction="up" scrollamount="3" hight="250">
                                <ul >
                                <li className='text-white  px-3 fs-6 bg-danger text-justify rounded-2'>
                                    <p className='p-2'>આપના પુત્ર અથવા પુત્રીનો સબંધ થાય ત્યારે વહેલામાં વહેલી તકે આપનુ ફોમઁ રદ કરાવો</p>
                                </li>

                                <li className='text-white px-3  fs-6 bg-danger rounded-2' >
                                    <p className='p-2'>કોઈ પણ પ્રકારની ભૂલ જણાય તો અમને આપની માહિતી ૯૭૭૩૧૨૪૫૯૮ (SILVER TECHNOLOGIES) પર WhatsApp કરી આપવી. (કોલ કરવો નહી.)</p>
                                </li>

                                <li className='text-white px-3 fs-6 bg-danger rounded-2' >
                                    <p className='p-2'>તમે મોકલેલા ફોર્મમાં અમારા દ્વાર થયેલી ભૂલ ને જ હાલ બદલી આપવામાં આવશે. અન્ય માહિતી અપડેટ કરવા માટે આપને સમય જણાવવામાં આવશે. જેની જાણ વેબસાઈટ પર કરવામાં આવશે.</p>
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
