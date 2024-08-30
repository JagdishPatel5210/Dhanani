import React from 'react'
import Header from '../../Components/Header';
import background from '../../Images/background.webp'



export default function Karobari() {
    return (
        <>
            {/* // - ------------------------- Header Start -------------------------- */}
            <Header />
            {/* -------------------------- Header end -------------------------- */}

            <div className='container-fluid' >
                <div className="row d-block">
                    <div className="parallax" style={{ backgroundImage: `url(${background})`, position: 'relative', height: '30vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', }}>
                        <div className="overlay" style={{ position: 'absolute', zIndex: '1', }}>

                        </div>
                    </div>
                </div>

                <div className='container-fluid  p-5'>
                    <div className='container'>
                        <div className='row'>
                            <h1 className='text-center fw-bold mt-2' style={{color:'#041d57'}}>કારોબારી સભ્યો</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
