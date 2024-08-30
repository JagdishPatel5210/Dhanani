import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import MainLogo from '../Images/MainLogo.png';
import Button from 'react-bootstrap/Button';

export default function Header() {
    return (
        <>
            < div className='container-fluid'>
                <div className='container'>
                    <div className='l-btn d-flex'>
                        <div className='row d-flex'>
                            <div className='col-2'>
                                <img src={MainLogo} className='img-fluid' width={130} />
                            </div>
                            <div className='col-10'>
                                <ul className='d-flex justify-content-end align-items-center h-100 menu'>
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
                                        <Link to="#">સમાજ ના સભ્યો</Link>
                                    </li>
                                    <li className='p-3'>
                                        <Link to="#">પસંદગી માટે</Link>
                                    </li>
                                    <li className='p-3'>
                                        <Link to="#">જાહેરાત</Link>
                                    </li>
                                    <li className='p-3'>
                                        <Link to="#">અમારો સંપર્ક કરો</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <NavLink to='/FormPage' onClick={''}>
                            <Button variant="outline-info" className='btn btn-secondary bg-bondiBlue mt-4' style={{ 'borderRadius': '30px', alignContent: 'end' }}>
                                Login
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </div >
        </>
    )
}
