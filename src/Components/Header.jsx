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
                                <Nav className="d-flex pt-3">
                                    <NavLink to="/MainPage" className='px-3 menu-line'><h6 className='menu-line2'>હોમ</h6></NavLink>
                                            <NavLink to="#" className='px-3 menu-line'><h6 className='menu-line2'>અમારા વિશે</h6></NavLink>
                                            <NavLink to="/Karobari" className='px-3 menu-line'><h6 className='menu-line2'>કારોબારી સભ્યો</h6></NavLink>
                                            <NavLink to="#" className='px-3 menu-line'><h6 className='menu-line2'>સમાજ ના સભ્યો</h6></NavLink>
                                            <NavLink to="#" className='px-3 menu-line'><h6 className='menu-line2'>પસંદગી માટે</h6></NavLink>
                                            <NavLink to="#" className='px-3 menu-line'><h6 className='menu-line2'>જાહેરાત</h6></NavLink>
                                            <NavLink to="/ContactUs" className='px-3 menu-line'><h6 className='menu-line2'>અમારો સંપર્ક કરો</h6></NavLink>
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

