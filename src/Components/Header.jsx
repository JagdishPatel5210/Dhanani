import React from 'react'
import { Link } from 'react-router-dom';
import MainLogo from '../Images/MainLogo.png';

export default function Header() {
    return (
        <>
            < div className='container-fluid' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-2'>
                            <img src={MainLogo} className='img-fluid' width={130} />
                        </div>
                        <div className='col-10 header-menu'>
                            <ul className='d-flex justify-content-end align-items-center h-100 menu'>
                                <li className='p-3'>
                                <Link to="/MainPage">હોમ</Link>
                                </li>
                                <li className='p-3'>
                                <Link to="/AmaraVishe">અમારા વિશે</Link>
                                </li>
                                <li className='p-3'>
                                <Link to="#">કારોબારી સભ્યો</Link>
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
                </div>
            </div >
        </>
    )
}
