import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import MainLogo from '../Images/MainLogo.png';
import Button from 'react-bootstrap/Button';
import { IoLogInSharp } from 'react-icons/io5';

export default function Header() {
    const handleLogin = () => { }

    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-3">
                            <img src={MainLogo} className='logo' />
                        </div>
                        <div className="col-7">
                            <ul className='d-flex align-items-center menu'>
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
                            </ul>
                        </div>
                        <div className='col-2 text-end'>
                            <NavLink to='/Login' onClick={handleLogin}>
                                <button type="Login" className="submit-btn">
                                    <IoLogInSharp size={17} className='me-2' />
                                    Login
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
