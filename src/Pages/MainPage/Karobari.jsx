import React from 'react'
import Header from '../../Components/Header';
import background from '../../Images/01.jpg'
import Card from 'react-bootstrap/Card';
import cardimg from '../../Images/poster4.jpg'
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
                    <div className="parallax" style={{ backgroundImage: `url(${background})`, position: 'relative', height: '40vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', }}>
                        <div className="overlay" style={{ position: 'absolute', zIndex: '1', width: '100px' }}>
                        </div>
                    </div>
                </div>

                <div className='container-fluid pt-5' id='karo-bari'>
                    <div className='container'>
                        <div className='row'>
                            <h1 className='text-center fw-bold mt-3' style={{ color: '#041d57' }}>કારોબારી સભ્યો</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <Card>
                                    <Card.Img variant="top" src={cardimg} />
                                    <Card.Body>
                                        <div className='text-center'>
                                            <Card.Title>પ્રમુખ</Card.Title>
                                            {/* <Card.Subtitle className="mb-2 text-muted">ગામ : દાંતકરોડી</Card.Subtitle> */}
                                            <Card.Text>
                                                ફોન : ૯૮૨૫૧ ૪૭૩૦૭ 
                                            </Card.Text>
                                            <Card.Link href="#" className='text-center custom-link'>ગેવરીયા ગીરધરભાઈ લક્ષ્મણભાઈ</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card>
                                    <Card.Img variant="top" src={cardimg} />
                                    <Card.Body>
                                        <div className='text-center'>
                                            <Card.Title>ઉપપ્રમુખ</Card.Title>
                                            {/* <Card.Subtitle className="mb-2 text-muted">ગામ : દેદીયાસણ</Card.Subtitle> */}
                                            <Card.Text>
                                                ફોન : ૯૯૯૮૯ ૫૦૬૯૦ 
                                            </Card.Text>
                                            <Card.Link href="#" className='custom-link'>જસાણી જયસુખભાઈ વલ્લભભાઈ</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card>
                                    <Card.Img variant="top" src={cardimg} />
                                    <Card.Body>
                                        <div className='text-center'>
                                            <Card.Title>મંંત્રી</Card.Title>
                                            {/* <Card.Subtitle className="mb-2 text-muted">ગામ : મીઠાધરવા</Card.Subtitle> */}
                                            <Card.Text>
                                                ફોન : ૯૮૭૯૨ ૮૦૧૯૨
                                            </Card.Text>

                                            <Card.Link href="#" className='custom-link'>રાજપરા નરેન્દ્રભાઈ શંભુભાઈ</Card.Link> 
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card>
                                    <Card.Img variant="top" src={cardimg} />
                                    <Card.Body>
                                        <div className='text-center'>
                                            <Card.Title>સહમંત્રી</Card.Title>
                                            {/* <Card.Subtitle className="mb-2 text-muted">ગામ : ચવેલી</Card.Subtitle> */}
                                            <Card.Text>
                                                ફોન : ૯૮૭૯૪ ૬૭૩૬૮ 
                                            </Card.Text>
                                            <Card.Link href="#" className='custom-link'>જોગણી રસીકભાઈ રવજીભાઈ</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>


                        <div className="row mt-4">
                            <div className="col-lg-3">
                                <Card>
                                    <Card.Img variant="top" src={cardimg} />
                                    <Card.Body>
                                        <div className="text-center">


                                            <Card.Title>ખજાનચી</Card.Title>
                                            {/* <Card.Subtitle className="mb-2 text-muted">ગામ : માતપુર</Card.Subtitle> */}
                                            <Card.Text>
                                                ફોન : ૯૮૭૯૬ ૫૫૧૦૯ 
                                            </Card.Text>

                                            <Card.Link href="#" className='custom-link'>ગેવરીયા અરવિંદભાઈ પોપટભાઈ</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card>
                                    <Card.Img variant="top" src={cardimg} />
                                    <Card.Body>
                                        <div className="text-center">
                                            <Card.Title>કો. ઓડીનેટર</Card.Title>
                                            {/* <Card.Subtitle className="mb-2 text-muted">ગામ : ખટાસણા</Card.Subtitle> */}
                                            <Card.Text>
                                                ફોન : ૯૮૨૫૭ ૪૮૪૯૯
                                            </Card.Text>
                                            <Card.Link href="#" className='custom-link'>જસાણી ફુલાભાઈ બાબુભાઈ</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card>
                                    <Card.Img variant="top" src={cardimg} />
                                    <Card.Body>
                                        <div className="text-center">


                                            <Card.Title>સલાહકાર</Card.Title>
                                            {/* <Card.Subtitle className="mb-2 text-muted">ગામ : સામેત્રા</Card.Subtitle> */}
                                            <Card.Text>
                                                ફોન : ૯૮૨૫૫ ૭૫૫૬૫
                                            </Card.Text>

                                            <Card.Link href="#" className='custom-link'>સોરઠીયા લાલજીભાઈ લક્ષ્મણભાઈ</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card>
                                    <Card.Img variant="top" src={cardimg} />
                                    <Card.Body>
                                        <div className="text-center">
                                            <Card.Title>સલાહકાર</Card.Title>
                                            {/* <Card.Subtitle className="mb-2 text-muted">ગામ : ખટાસણા</Card.Subtitle> */}
                                            <Card.Text>
                                                ફોન : ૯૮૨૫૧ ૩૫૧૧
                                            </Card.Text>
                                            <Card.Link href="#" className='custom-link'>ખોયાણી કેશવભાઈ જાદવભાઈ</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-3">
                                <Card>
                                    <Card.Img variant="top" src={cardimg} />
                                    <Card.Body>
                                        <div className="text-center">
                                            <Card.Title>સલાહકાર</Card.Title>
                                            {/* <Card.Subtitle className="mb-2 text-muted">ગામ : દાંતકરોડી</Card.Subtitle> */}
                                            <Card.Text>
                                                ફોન : ૯૯૦૯૨ ૮૯૩૪૬
                                            </Card.Text>
                                            <Card.Link href="#" className='custom-link'>જોગાણી ચુનીભાઈ કાનજીભાઈ</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card>
                                    <Card.Img variant="top" src={cardimg} />
                                    <Card.Body>
                                        <div className="text-center">
                                            <Card.Title>સલાહકાર</Card.Title>
                                            {/* <Card.Subtitle className="mb-2 text-muted">ગામ : મીઠા</Card.Subtitle> */}
                                            <Card.Text>
                                                ફોન : ૯૮૭૯૦ ૪૮૦૦૨
                                            </Card.Text>
                                            <Card.Link href="#" className='custom-link'>ગેવરીયા મથુરભાઇ નાનજીભાઇ</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card>
                                    <Card.Img variant="top" src={cardimg} />
                                    <Card.Body>
                                        <div className="text-center">
                                            <Card.Title>સલાહકાર</Card.Title>
                                            {/* <Card.Subtitle className="mb-2 text-muted">ગામ : સામેત્રા</Card.Subtitle> */}
                                            <Card.Text>
                                                ફોન : ૯૮૨૫૪ ૨૫૮33
                                            </Card.Text>
                                            <Card.Link href="#" className='custom-link'>ગેવરીયા મનસુખભાઇ ગોકળભાઇ</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3">
                                <Card>
                                    <Card.Img variant="top" src={cardimg} />
                                    <Card.Body>
                                        <div className="text-center">
                                            <Card.Title>સલાહકાર</Card.Title>
                                            {/* <Card.Subtitle className="mb-2 text-muted">ગામ : દેદીયાસણ</Card.Subtitle> */}
                                            <Card.Text>
                                                ફોન :૯૮૨૫૪ ૫૫૧૭૧
                                            </Card.Text>
                                            <Card.Link href="#" className='custom-link'>પટોળીયા કનુભાઇ ભુરાભાઇ</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                        
                        {/* <div className="row mt-4">
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
                        </div> */}
                    </div>
                </div>
            </div>

            {/* --------------------------------Footer Section Start ----------------------------------------*/}
            <Footer />
            {/* --------------------------------Footer Section End ----------------------------------------*/}

        </>
    )
}
