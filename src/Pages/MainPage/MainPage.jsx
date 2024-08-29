import React, { useEffect } from 'react'
import '../../CSS/MainPage.css'
import MainLogo from '../../Images/MainLogo.png'
import OwlCarousel from 'react-owl-carousel';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import { Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Layer1 from '../../Images/Layer1.png';
import Layer2 from '../../Images/Layer2.png';
import Layer3 from '../../Images/Layer3.png';
import Layer4 from '../../Images/Layer4.png';
import Layer5 from '../../Images/Layer5.png';
import Layer6 from '../../Images/Layer6.png';
import Layer_20 from '../../Images/Layer_20.png';
import President1 from '../../Images/President1.png';
import Mantri1 from '../../Images/Mantri1.jpeg';
import Layer15 from '../../Images/Layer15.png';
import Layer16 from '../../Images/Layer16.png';
import Layer17 from '../../Images/Layer17.png';
import Layer18 from '../../Images/Layer18.png';
import Layer19 from '../../Images/Layer19.png';
import Layer20 from '../../Images/Layer20.png';
import Layer10 from '../../Images/Layer10.png';
import Layer12 from '../../Images/Layer12.png';
import Event1 from '../../Images/Event1.jpg';
import Event2 from '../../Images/Event2.jpeg';
import Event3 from '../../Images/Event3.jpeg';
import Event27 from '../../Images/Event27.jpeg';
import Footer from '../../Components/Footer';


function MainPage() {

  const options = {
    loop: false,
    nav: false,
    dots: false,
    items: 1, // Number of items to show in the carousel
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  };

  useEffect(() => {
    if ($ && $.fn.owlCarousel) {
      $(".owl-carousel").owlCarousel(options);
    } else {
      console.error('jQuery or Owl Carousel is not properly loaded.');
    }
  }, [options]);

  const CarouselItem = ({ title, name, position, phone, image }) => (
    <div className="card text-center">
      <img src={image} alt={name} className="rounded-circle img-fluid" style={{ width: '40%', height: '50%', margin: 'auto' }} />
      <h3 className="mt-3">{title}</h3>
      <h5>{name}</h5>
      <p>{position}</p>
      <p>{phone}</p>
    </div>
  );

  return (
    <>

      {/* // -------------------------- Header Start -------------------------- */}
      < div className='container-fluid' >
        <div className='container'>
          <div className='row'>
            <div className='col-2'>
              <img src={MainLogo} className='img-fluid' width={130} />
            </div>
            <div className='col-10 header-menu'>
              <ul className='d-flex justify-content-end align-items-center h-100 menu'>
                <li className='p-3'>
                  <a href="">હોમ</a>
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
      {/* -------------------------- Slider1 Start -------------------------- */}

      {/* -------------------------- Slider1 Stop --------------------------*/}
      <div className='container-fluid'>
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <img src='https://www.15gamkpsmain.com/img/slider/slider1.jpg' className='img-fluid' style={{ width: '100%', height: '550px', padding: '0 !important' }} />
          </div>
          <div className="item">
            <img src='https://www.15gamkpsmain.com/img/slider/slider2.jpg' className='img-fluid' style={{ width: '100%', height: '550px' }} />
          </div>
        </OwlCarousel>
      </div >
      {/* -------------------------- Header Stop -------------------------- */}

      {/* -------------------------- About US Start -------------------------- */}
      <div className='container-fluid mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className='row'>
                <div className='col-12 p-1 btm-line mb-4'>
                  <h2 className='fw-bold mb-2'>અમારા વિશે</h2>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <p className='fs-13' align='justify'>
                    મુળ મધ્ય એશિયાથી આવેલા આર્યો પંજાબ અને રાજસ્થાન થઇ ઈ.સ પૂર્વે ૧૨૫૦ થી ૧૨૦૦ ના સમયગાળામાં ગુજરાત આવીને વસ્યા અને પાટીદાર તરીકે ઓળખાયા. તેઓ જ્યાં પણ ગયા ત્યાં મા ઉમિયાની પૂજા ચાલુ રાખી. વેદોમાં ધન-ધાન્ય અને સમૃદ્ધિની દેવી તરીકે પૂજાતા ઉષાદેવી તે જ ઉમાદેવી છે. દંતકથા પ્રમાણે મા ઉમિયાના ઉંઝાના મુળ સ્થાનકની સ્થાપના ખુદ ભગવાન શિવે કરી હતી. શ્રી મા ઉમિયા એ આદ્યશક્તિ જગતજનની છે તથા કડવા પાટીદારોનાં કુળદેવી છે. મા ઉમિયાએ આદ્યશક્તિ સ્વરૂપે સૃષ્ટિની ઉત્પત્તિ કરી. મા સરસ્વતી, મા લક્ષ્મી અને મા કાલી તેમનાં જ સ્વરૂપ છે. જગતમાં જયારે પણ આસુરી શક્તિઓનું પ્રભુત્વ વધ્યું, ત્યારે યુગે યુગે મા મહાશક્તિ જુદાં-જુદાં સ્વરૂપે પ્રગટ થયાં અને દેવી શક્તિઓનું રાણ કર્યું.રાજા વ્રજપાલસિંહજીએ મા ઉમિયાના મંદિરનું નિર્માણ કરાવ્યું.ઈ.સ ૧૫૬ સવંત ૨૧૨માં રાજા વ્રજપાલસિંહજીએ ઉંઝામાં મા ઉમિયા મંદિરનું નિર્માણ કરાવ્યું. રાજા અવનીપતે સવા લાખ શ્રીફળના હોમ સાથે કૂવા બનાવી ઘી ભરી હોમ કરી મોટો યજ્ઞ કર્યો. વિક્રમ સંવત ૧૧૨૨/૨૪ માં વેગડા ગામીએ મંદિરનો જીર્ણોદ્ધાર કર્યો. જેનો વિ.સં ૧૩૫૬ ની આસપાસ અલાઉદીન ખીલજીના સુબા ઉલુઘખાને વિધ્વંશ કર્યો. તે વખતે માતાજીની મૂર્તિ મોલ્લોતના મોટા માઢના ગોખમાં રાખવામાં આવી.હાલમાં મોલ્લોત વિભાગમાં જ્યાં શેષશાયી ભગવાનની જગ્યા છે ત્યાં ટે મંદિર હતું.
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <Button variant="outline-info" className='btn bg-bondiBlue mt-4 button' style={{ 'borderRadius': '30px' }}>
                    વધુ વાંચો
                  </Button>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <img src='https://www.15gamkpsmain.com/assets/images/slider/umiya.jpg' className='img-fluid  shadow-lg bg-white rounded' style={{ width: '70%' }} />
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------- About US Stop -------------------------- */}


      {/* --------------------------------card-Carousel Section  Start ----------------------------------------*/}

      <div className="container border-0">
        <div className="row mt-5">
          <div className='col-6 '>
            <h1 className='text-center'>સામાજ ના હોડેદારો</h1>
            <div className='row' >
              <div className='first border-0'>
                <OwlCarousel className="owl-theme" {...options}>
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>રાકેશભાઈ આર.  પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>પ્રમુખ</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૮૨૫૫૫૬૫૦૫</span>}
                    image={Layer_20}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>શાંતિલાલ ટી.  પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>ઉપપ્રમુખ</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૪૨૬૩૨૪૫૦૪</span>}
                    image={Layer2}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>સુરેશભાઈ આઈ.  પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>મંંત્રી</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૯૨૫૦૭૫૮૮૦</span>}
                    image={Layer3}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>અરુણભાઇ બી. પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>સહમંત્રી</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૪૨૮૮૧૩૨૨૫</span>}
                    image={Layer4}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>ઘનજીભાઇ વી. પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>ખજાનચી</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૯૨૪૨૫૧૦૧૭</span>}
                    image={Layer5}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>નવીનભાઈ એન. પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>આંતરિક ઓડીટર  </span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૪૨૭૫૪૩૮૯૯</span>}
                    image={Layer6}
                  />
                </OwlCarousel>
              </div>
            </div>
          </div>

          <div className='col-6 '>
            <h1 className='text-center'>એકમોના પ્રમુખ/મંત્રી</h1>
            <div className='row' >
              <div className='first'>
                <OwlCarousel className="owl-theme" {...options}>
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>બળદેવભાઈ પી. પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>પ્રમુખ મહેસાણા એકમ</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૭૪૩૪૦ ૬૪૫૧૦</span>}
                    image={President1}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>બકુલકુમાર એચ. પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>મંત્રી મહેસાણા એકમ</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૯૭૯૬૯૯૩૦૯</span>}
                    image={Mantri1}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>અશોકભાઈ જેઠાલાલ પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>પ્રમુખ અમદાવાદ એકમ</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૮૨૫૦૪૦૮૪૭</span>}
                    image={Layer15}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>ગિરીશકુમાર પ્રહલાદભાઈ પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>મંંત્રી અમદાવાદ એકમ</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૯૦૯3૦૭૦33</span>}
                    image={Layer16}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>ઈશ્વરભાઈ બાલચંદદાસ પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>પ્રમુખ વડોદરા એકમ</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૮૭૯૪૧૦૮૪૦</span>}
                    image={Layer17}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>અરવિંદભાઈ જોઈતાભાઈ પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>મંત્રી વડોદરા એકમ</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૮૨૫૦૧૮૬૧૬</span>}
                    image={Layer18}
                  />
                </OwlCarousel>
              </div>
            </div>
          </div>

          <div className='col-6 mt-3'>
            <h1 className='text-center'>વિકાસ ટ્રસ્ટ ના હોદ્દેદારો</h1>
            <div className='row' >
              <div className='first'>
                <OwlCarousel className="owl-theme" {...options}>
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>મનોરભાઈ એમ. પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>પ્રમુખ</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૮૨૫૦૨૬૧૭૫</span>}
                    image={Layer10}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>સુરેશભાઈ વી. પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>ઉપપ્રમુખ</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૮૨૫૩૪૮૫૯૨</span>}
                    image={Layer12}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>હરગોવિંદદાસ એમ. પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>મંંત્રી</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૮૯૮૦૬૩૦૫૯</span>}
                    image={Layer19}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>સુરેશભાઈ આઈ. પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>સહમંત્રી</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૯૨૫૦૭૫૮૮૦</span>}
                    image={Layer20}
                  />
                </OwlCarousel>
              </div>
            </div>
          </div>

          <div className='col-6 mt-3'>
            <h1 className='text-center'>સોશિયલ વેલ્ફેર ટ્રસ્ટ</h1>
            <div className='row' >
              <div className='first'>
                <OwlCarousel className="owl-theme" {...options}>
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>મીતુલભાઈ પી. પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>ઉપપ્રમુખ</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૮૨૪૦૨૧૧૩૮</span>}
                    image={Layer_20}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>ચેલાભાઈ જી. પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>પ્રમુખ</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૮૨૫૮૪૧૭૨૩</span>}
                    image={Layer2}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>ભરતભાઈ એ. પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>મંંત્રી</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૪૨૬૪૮૮૨૪૧</span>}
                    image={Layer3}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>દિનેશભાઈ બી. પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>સહમંત્રી</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 ૯૮૯૮૩૫૬૪૬૧</span>}
                    image={Layer4}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>ધનજીભાઈ વી. પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>ઉપપ્રમુખ</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 1234567890</span>}
                    image={Layer5}
                  />
                  <CarouselItem
                    // title="સામાજ ના હોડેદારો"
                    name={<span style={{ color: '#4c74e5' }}>ધનજીભાઈ વી. પટેલ</span>}
                    position={<span style={{ color: '#f2915f' }}>ઉપપ્રમુખ</span>}
                    phone={<span style={{ color: '#4c74e5' }}>📞 1234567890</span>}
                    image={Layer6}
                  />
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* --------------------------------card-Carousel Section end ----------------------------------------*/}

      {/* --------------------------------card Section Start ----------------------------------------*/}
      <div className="container-fluid mt-5">
        <div className="container">
          <h1 className='text-center fw-bold'>ઇવેન્ટસ</h1>
          <div className="row">
            <div className="col-lg-3">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Event1} style={{ height: '12rem' }} />
                <Card.Body>
                  <Card.Title>વિકાસ ટ્ર્સ્ટ જનરલ સભા</Card.Title>
                  <Card.Text>
                    2022-02-01
                  </Card.Text>
                  <Button variant="outline-info" className='btn bg-bondiBlue mt-4 button' style={{ 'borderRadius': '30px' }}>
                    વધુ વાંચો
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-3">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Event2} />
                <Card.Body>
                  <Card.Title>મહેસાણા સ્નેહમિલન
                  </Card.Title>
                  <Card.Text>
                    2022-03-13
                  </Card.Text>
                  <Button variant="outline-info" className='btn bg-bondiBlue  mt-4 button' style={{ 'borderRadius': '30px' }}>
                    વધુ વાંચો
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-3">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Event3} />
                <Card.Body>
                  <Card.Title>મહેસાણા ક્રિકેટ ટુર્નામેન્ટ</Card.Title>
                  <Card.Text>
                    2022-04-23
                  </Card.Text>
                  <Button variant="outline-info" className='btn  bg-bondiBlue mt-4 button' style={{ 'borderRadius': '30px' }}>
                    વધુ વાંચો
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-3">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Event27} style={{ height: '12rem' }} />
                <Card.Body>
                  <Card.Title>અમદાવાદ ક્રિકેટ ટુર્નામેન્ટ</Card.Title>
                  <Card.Text>
                    bd
                  </Card.Text>
                  <Button variant="outline-info" className='btn bg-bondiBlue  mt-4 button' style={{ 'borderRadius': '30px' }}>
                    વધુ વાંચો
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------card Section End ----------------------------------------*/}

      {/* --------------------------------Footer Section Start ----------------------------------------*/}

      <Footer />
      {/* --------------------------------Footer Section Start ----------------------------------------*/}
    </>
  )
}

export default MainPage