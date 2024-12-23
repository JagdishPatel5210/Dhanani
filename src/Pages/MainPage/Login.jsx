import React from 'react';
import LoginImg from '../../Images/bkg-login.jpg';
import { Link } from 'react-router-dom';
import { BiLogInCircle } from 'react-icons/bi';

function Login() {
    return (
        <>
            <div className='LoginPage'>
                <div className='container-fluid' style={{ height: '100vh', backgroundColor: 'lightgray', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className='container'>
                        <form>
                            <div className='row p-2'>
                                <div className='col-12 d-flex justify-content-center align-items-center'>
                                    <div className="card d-flex justify-content-center align-items-center" style={{ width: '500px', height: '400px' }}>
                                        <div className='row'>
                                            <div className='col-12 p-2 d-flex justify-content-center align-items-center'>
                                                <div className='row'>
                                                    <div className='col-12 d-flex justify-content-center'>
                                                        <h3 className='border-bottom border-2 border-danger-subtle fs-5 fw-bold' style={{ color: '#071a5f' }}>ધાનાણી પરિવાર...</h3>
                                                    </div>

                                                    <div className='col-12 d-flex justify-content-center pt-5'>
                                                        <input type="text" name='EmailID' id='emailId' className='form-control w-50' placeholder='નામ' />
                                                    </div>

                                                    <div className='col-12 d-flex justify-content-center pt-3'>
                                                        <input type="password" name='PassWord' id='password' className='form-control w-50' placeholder='પાસવર્ડ' />
                                                    </div>

                                                    <div className='col-12 pt-5 text-center'>
                                                        <Link to='/FormPage'>
                                                            <button type='submit' className='btn-login'>
                                                                <BiLogInCircle className='me-2' size={17} />
                                                                Login
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login