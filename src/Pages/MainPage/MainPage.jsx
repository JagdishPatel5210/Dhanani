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
import Layer1 from '../../Images/Layer1.png';
import Layer2 from '../../Images/Layer2.png';

function MainPage() {

  const options = {
    loop: true,
    nav: false,
    dots: false,
    items: 1, // Number of items to show in the carousel
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  };

  useEffect(() => {
    if ($ && $.fn.owlCarousel) {
      $(".owl-carousel").owlCarousel(options);
    } else {
      console.error('jQuery or Owl Carousel is not properly loaded.');
    }
  }, [options]);

  return (
    <>

      {/* // -------------------------- Header Start -------------------------- */}
      < div className='container-fluid' >
        <div className='container'>
          <div className='row'>
            <div className='col-2'>
              <img src={MainLogo} className='img-fluid' width={130} />
            </div>
            <div className='col-10'>
              <ul className='d-flex justify-content-end align-items-center h-100 menu'>
                <li className='p-3'>
                  <a href="">હોમ</a>
                </li>
                <li className='p-3'>
                  <a href="">અમારા વિશે</a>
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
                  <Button variant="outline-info" className='btn btn-secondary bg-bondiBlue mt-3' style={{ 'borderRadius': '30px' }}>
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


      {/* --------------------------------card Section  Start ----------------------------------------*/}
      <div className='container-fluid mt-5'>
        <div className='container'>
          <div className="row">
            <div className='col-6 text-center'>
              <h1>સમાજ ના હોદ્દેદારો</h1>
              <Carousel indicators={false}>
                <Carousel.Item>
                  <div className='card border-0'>
                    <div className='card-body'>
                      <img
                        src={Layer1}
                        alt="First slide"
                        className="rounded-circle"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                      />
                      <h5>Person 2</h5>
                      <p>Title</p>
                    </div>
                  </div>
                  <div className='card border-0'>
                    <div className='card-body'>
                      <img
                        src={Layer1}
                        alt="First slide"
                        className="rounded-circle"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                      />
                      <h5>Person 2</h5>
                      <p>Title</p>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className='col-6 text-center'>
              <h1>એકમોના પ્રમુખ/મંત્રી</h1>
              <Carousel indicators={false}>
                <Carousel.Item>
                  <div className='card border-0'>
                    <div className='card-body'>
                      <img
                        src={Layer1}
                        alt="First slide"
                        className="rounded-circle"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                      />
                      <h5>Person 2</h5>
                      <p>Title</p>
                    </div>
                  </div>
                  <div className='card border-0'>
                    <div className='card-body'>
                      <img
                        src={Layer1}
                        alt="First slide"
                        className="rounded-circle"
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                      />
                      <h5>Person 2</h5>
                      <p>Title</p>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default MainPage