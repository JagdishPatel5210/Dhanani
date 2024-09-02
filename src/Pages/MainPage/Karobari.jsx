import React from 'react'
import Header from '../../Components/Header';
import background from '../../Images/background.webp'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import Layer_20 from '../../Images/Layer_20.png';
import Layer1 from '../../Images/Layer1.png';
import Layer2 from '../../Images/Layer2.png';
import Layer6 from '../../Images/Layer6.png';
import Layer4 from '../../Images/Layer4.png';
import Layer5 from '../../Images/Layer5.png';
import Layer10 from '../../Images/Layer10.png';
import Layer12 from '../../Images/Layer12.png';
import Layer15 from '../../Images/Layer15.png';
import Layer16 from '../../Images/Layer16.png';
import Layer17 from '../../Images/Layer17.png';
import Layer18 from '../../Images/Layer18.png';
import Layer19 from '../../Images/Layer19.png';
import Footer from '../../Components/Footer';








import { CardImg } from 'react-bootstrap';







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

                <div className='container-fluid  p-5' id='karo-bari'>
                    <div className='container'>
                        <div className='row'>
                            <h1 className='text-center fw-bold mt-3' style={{ color: '#041d57' }}>કારોબારી સભ્યો</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Layer_20} />
                                    <Card.Body>
                                        <div className='text-center'>
                                            <Card.Title>પ્રમુખ</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">ગામ : દાંતકરોડી</Card.Subtitle>
                                            <Card.Text>
                                                ફોન : ૯૮૨૫૫૫૬૫૦૫
                                            </Card.Text>
                                            <Card.Link href="#" className='text-center custom-link'>રાકેશભાઈ આર.  પટેલ</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Layer1} />
                                    <Card.Body>
                                        <div className='text-center'>
                                            <Card.Title>ઉપપ્રમુખ</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">ગામ : દેદીયાસણ</Card.Subtitle>
                                            <Card.Text>
                                                ફોન : ૯૪૨૬૩૨૪૫૦૪
                                            </Card.Text>
                                            <Card.Link href="#" className='custom-link'>શાંતિલાલ ટી.  પટેલ</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Layer2} />
                                    <Card.Body>
                                        <div className='text-center'>
                                            <Card.Title>મંંત્રી</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">ગામ : મીઠાધરવા</Card.Subtitle>
                                            <Card.Text>
                                                ફોન : ૯૯૨૫૦૭૫૮૮૦
                                            </Card.Text>

                                            <Card.Link href="#" className='custom-link'>સુરેશભાઈ આઈ.  પટેલ</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Layer6} />
                                    <Card.Body>
                                        <div className='text-center'>
                                            <Card.Title>સહમંત્રી</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">ગામ : ચવેલી</Card.Subtitle>
                                            <Card.Text>
                                                ફોન : ૯૪૨૮૮૧૩૨૨૫
                                            </Card.Text>
                                            <Card.Link href="#" className='custom-link'>અરુણભાઇ બી. પટેલ</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>


                        <div className="row mt-4">
                            <div className="col-lg-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Layer4} />
                                    <Card.Body>
                                        <div className="text-center">


                                            <Card.Title>ખજાનચી</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">ગામ : માતપુર</Card.Subtitle>
                                            <Card.Text>
                                                ફોન : ૯૯૨૪૫૫૧૦૧૭
                                            </Card.Text>

                                            <Card.Link href="#" className='custom-link'>Another Link</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Layer17} />
                                    <Card.Body>
                                        <div className="text-center">
                                            <Card.Title>આંતરિક ઓડીટર</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">ગામ : ખટાસણા</Card.Subtitle>
                                            <Card.Text>
                                                ફોન : ૯૪૨૭૫૪૩૮૯૯
                                            </Card.Text>
                                            <Card.Link href="#" className='custom-link'>Another Link</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Layer18} />
                                    <Card.Body>
                                        <div className="text-center">


                                            <Card.Title>કારોબારી સભ્ય</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">ગામ : સામેત્રા</Card.Subtitle>
                                            <Card.Text>
                                                ફોન : ૯૯૦૯૩૦૭૦૩૩
                                            </Card.Text>

                                            <Card.Link href="#" className='custom-link'>Another Link</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Layer19} />
                                    <Card.Body>
                                        <div className="text-center">
                                            <Card.Title>કારોબારી સભ્ય</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">ગામ : ખટાસણા</Card.Subtitle>
                                            <Card.Text>
                                                ફોન : ૯૮૨૫૭૩૨૬૧૦
                                            </Card.Text>
                                            <Card.Link href="#" className='custom-link'>Another Link</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Layer16} />
                                    <Card.Body>
                                        <div className="text-center">
                                            <Card.Title>કારોબારી સભ્ય</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">ગામ : દાંતકરોડી</Card.Subtitle>
                                            <Card.Text>
                                                ફોન : ૯૮૨૫૦૪૦૮૪૭
                                            </Card.Text>
                                            <Card.Link href="#" className='custom-link'>Another Link</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Layer10} />
                                    <Card.Body>
                                        <div className="text-center">
                                            <Card.Title>કારોબારી સભ્ય</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">ગામ : મીઠા</Card.Subtitle>
                                            <Card.Text>
                                                ફોન : ૯૮૨૪૦૭૬૩૦૪
                                            </Card.Text>
                                            <Card.Link href="#" className='custom-link'>Another Link</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Layer12} />
                                    <Card.Body>
                                        <div className="text-center">
                                            <Card.Title>કારોબારી સભ્ય</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">ગામ : સામેત્રા</Card.Subtitle>
                                            <Card.Text>
                                                ફોન : ૭૮૭૪૦૭૮૫૧૭
                                            </Card.Text>
                                            <Card.Link href="#" className='custom-link'>Another Link</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={Layer15} />
                                    <Card.Body>
                                        <div className="text-center">
                                            <Card.Title>કારોબારી સભ્ય</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">ગામ : દેદીયાસણ</Card.Subtitle>
                                            <Card.Text>
                                                ફોન : ૯૮૨૫૦૨૬૧૭૫
                                            </Card.Text>
                                            <Card.Link href="#" className='custom-link'>Another Link</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item href='/'>{1} </Pagination.Item>
                                <Pagination.Item href='/'>{2} </Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Ellipsis />

                                <Pagination.Item disabled>{4}</Pagination.Item>

                                <Pagination.Ellipsis />
                                <Pagination.Item>{5}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </div>
                    </div>
                </div>
            </div>

            {/* --------------------------------Footer Section Start ----------------------------------------*/}
            <Footer />
            {/* --------------------------------Footer Section End ----------------------------------------*/}

        </>
    )
}
