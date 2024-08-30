import React from 'react'
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
                                    <a href="\MainPage">હોમ</a>
                                </li>
                                <li className='p-3'>
                                    <a href='\AmaraVishe'>અમારા વિશે</a>
                                </li>
                                <li className='p-3'>
                                    <a href="">કારોબારી સભ્યો</a>
                                </li>
                                <li className='p-3'>
                                    <a href="">સમાજ ના સભ્યો</a>
                                </li>
                                <li className='p-3'>
                                    <a href="">પસંદગી માટે</a>
                                </li>
                                <li className='p-3'>
                                    <a href="">જાહેરાત</a>
                                </li>
                                <li className='p-3'>
                                    <a href="">અમારો સંપર્ક કરો</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
