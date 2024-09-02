import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import MainLogo from '../Images/MainLogo.png';
import Button from 'react-bootstrap/Button';

export default function Header() {
    return (
        <>

            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-3 ps-5">
                            <img src={MainLogo} className='logo' />
                        </div>
                        <div className="col-9">
                            <ul className='d-flex  pt-4 menu'>
                                <li className='p-3'>
                                    <Link to="/MainPage">હોમ</Link>
                                </li>
                                <li className='p-3'>
                                    <Link to="/AmaraVishe">અમારા વિશે</Link>
                                </li>
                                <li className='p-3'>
                                    <Link to="/Karobari">કારોબારી સભ્યો</Link>
                                </li>
                                <li className='p-3'>
                                    <Link to="/SamajNaSabhyo">સમાજ ના સભ્યો</Link>
                                </li>
                                <li className='p-3'>
                                    <Link to="#">પસંદગી માટે</Link>
                                </li>
                                <li className='p-3'>
                                    <Link to="/Jaherat">જાહેરાત</Link>
                                </li>
                                <li className='p-3'>
                                    <Link to="/ContactUs">અમારો સંપર્ક કરો</Link>
                                </li>
                                <div className='px-5 '>
                                    <NavLink to='/FormPage' onClick={''}>
                                        <button type="Login" className="submit-btn">Login</button>
                                    </NavLink>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
