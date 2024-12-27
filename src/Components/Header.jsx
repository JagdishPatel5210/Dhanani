import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import MainLogo from '../Images/MainLogo.png';
import Button from 'react-bootstrap/Button';
import { IoLogInSharp } from 'react-icons/io5';
import { Nav, Navbar, NavbarToggle } from 'react-bootstrap';
import { IoMenu } from "react-icons/io5";


export default function Header() {
    const handleLogin = () => { }

    return (
        <>
            <div className="container">
                {/* <div className="container"> */}
                    <div className="row">
                        <div className="col-3">
                            <img src={MainLogo} className='logo' />
                        </div>
                        <div className="col-9 justify-content-end pt-4">
                            <Navbar collapseOnSelect expand="lg" className=' justify-content-end'>
                                <NavbarToggle aria-controls="responsive-navbar-nav m-5"><IoMenu className=' fs-1' /></NavbarToggle>
                                <Navbar.Collapse id="responsive-navbar-nav menu">
                                        <Nav className="d-flex ">
                                        <NavLink to="/MainPage" className='px-3 menu-line'>હોમ</NavLink>
                                            <Link to="#" className='px-3 menu-line'>અમારા વિશે</Link>
                                            <Link to="/Karobari" className='px-3 menu-line'>કારોબારી સભ્યો</Link>
                                            <Link to="#" className='px-3 menu-line'>સમાજ ના સભ્યો</Link>
                                            <Link to="#" className='px-3 menu-line'>પસંદગી માટે</Link>
                                            <Link to="#" className='px-3 menu-line'>જાહેરાત</Link>
                                            <Link to="/ContactUs" className='px-3 menu-line'>અમારો સંપર્ક કરો</Link>
                                            <NavLink to='/Login' className='menu2' onClick={handleLogin}>
                                                <button type="Login" className="submit-btn">
                                                    <IoLogInSharp size={17} className='me-2' />
                                                    Login
                                                </button>
                                            </NavLink>
                                        </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
            </div>

        </>
    )
}
