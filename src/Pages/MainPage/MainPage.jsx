import React, { useEffect, useState } from 'react'
import '../../CSS/MainPage.css'
import MainLogo from '../../Images/MainLogo.png'
import OwlCarousel from 'react-owl-carousel';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../../JS/carousel.js';

import Carouselimg1 from '../../Images/01.jpg'
import Carouselimg2 from '../../Images/2.jpg'
import Carouselimg3 from '../../Images/3.jpg'
import Carouselimg4 from '../../Images/4.jpg'
import Carouselimg5 from '../../Images/5.jpg'
import Carouselimg6 from '../../Images/6.jpg'
import Carouselimg7 from '../../Images/7.jpg'
import Carouselimg8 from '../../Images/8.jpg'
import Carouselimg9 from '../../Images/9.jpg'
import Carouselimg10 from '../../Images/10.jpg'
import Carouselimg11 from '../../Images/11.jpg'
import Carouselimg12 from '../../Images/12.jpg'
import Carouselimg13 from '../../Images/13.jpg'


// import Layer1 from '../../Images/Layer1.png';
// import Layer2 from '../../Images/Layer2.png';
// import Layer3 from '../../Images/Layer3.png';
// import Layer4 from '../../Images/Layer4.png';
// import Layer5 from '../../Images/Layer5.png';
// import Layer6 from '../../Images/Layer6.png';
// import Layer_20 from '../../Images/Layer_20.png';
// import President1 from '../../Images/President1.png';
// import Mantri1 from '../../Images/Mantri1.jpeg';
// import Layer15 from '../../Images/Layer15.png';
// import Layer16 from '../../Images/Layer16.png';
// import Layer17 from '../../Images/Layer17.png';
// import Layer18 from '../../Images/Layer18.png';
// import Layer19 from '../../Images/Layer19.png';
// import Layer20 from '../../Images/Layer20.png';
// import Layer10 from '../../Images/Layer10.png';
// import Layer12 from '../../Images/Layer12.png';
// import Event1 from '../../Images/Event1.jpg';
// import Event2 from '../../Images/Event2.jpeg';
// import Event3 from '../../Images/Event3.jpeg';
// import Event27 from '../../Images/Event27.jpeg';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import { FaArrowRight } from "react-icons/fa";




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
      <img src={image} alt={name} className="rounded-circle img-fluid " style={{ width: '40%', height: '50%', margin: 'auto' }} />
      <h3 className="mt-3">{title}</h3>
      <h5>{name}</h5>
      <p>{position}</p>
      <p>{phone}</p>
    </div>
  );

  return (
    <>

      {/* // - ------------------------- Header Start -------------------------- */}
      <Header />
      {/* -------------------------- Slider1 Start -------------------------- */}

      {/* -------------------------- Slider1 Stop --------------------------*/}


       <div className='container-fluid'>
        <div className='row bg-light'> 
           <div className="col-lg-3"></div>
          <div className='col-lg-6'>
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img src={Carouselimg1} alt="First slide" className='img-fluid' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Carouselimg2} alt="Second slide" className='img-fluid' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Carouselimg3} alt="Third slide" className='img-fluid' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Carouselimg4} alt="four slide" className='img-fluid' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Carouselimg5} alt="five slide" className='img-fluid' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Carouselimg6} alt="six slide" className='img-fluid' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Carouselimg7} alt="seven slide" className='img-fluid' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Carouselimg8} alt="eight slide" className='img-fluid' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Carouselimg9} alt="nine slide" className='img-fluid' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Carouselimg10} alt="Ten slide" className='img-fluid' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Carouselimg11} alt="oneone slide" className='img-fluid' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Carouselimg12} alt="onetwo slide" className='img-fluid' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={Carouselimg13} alt="onethree slide" className='img-fluid' />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-3"></div>
         </div>
      </div> 




  
      {/* -------------------------- Header Stop -------------------------- */}

      {/* -------------------------- About US Start -------------------------- */}
      <div className='container-fluid mt-5 position-relative'>
        <img src={Carouselimg1} alt="" className="imge " />
        <div className='container pt-3 pb-3'>
          <div className='row '>
            <div className='col-12'>
              <div className='row'>
                <div className='col-12 p-1 btm-line mb-4 text-center'>
                  <h2 className='fw-bold mb-2'>મારુ ગામ</h2>
                </div>
              </div>
              <div className='row' >
                <div className='col-12 col-md-12  col-lg-12 col-sm-12 fs-15'>
                  <p> <FaArrowRight className='m-2' /> અમરેલી જિલ્લા માં કુંકાવાવ-વડિયા તાલુકામાં અમરાપુર(ધાનાણી) ગામ આવેલું છે.  </p>
                  <p>  <FaArrowRight className='m-2' /> અમરેલી-કુંકાવાવ રોડ ઉપરઆ ગામ આવેલું છે. અમરેલીથી ૨૦ કિલોમીટર અને કુંકાવાવથી ૬ કિલોમીટર થાયછે. અમરાપુરમાં૬૦% વસ્તીકણબી પટેલ, ૨૦% કાઠી દરબારઅને ૨૦%  અન્યકોમવસેછે. અમરાપુર માં આવતી જ્ઞાતિમાં, દોશી, દેસાઈ, શેઠ, અને મડીયાઆ શાખા ના ભાઈ ઓ હતા, હાલ આ સર્વે મુંબઈ તથા અન્ય સ્થળે રહેવા ગયેલછે. હાલ આ ભાઈઓ માંથી અમરાપુર માં દોશી સિવાય કોઈપણ નથી.</p>
                  <p>  <FaArrowRight className='m-2' />દોશી કુંટુંબના સુરાપુરા પુ. હેમચંદબાપાની સર્વભાઈઓ ના સાથ-સહકારથી શ્રી હેમચંદબાપા પબ્લીકટ્રસ્ટ કરી, શ્રી મોતીચંદ ભગવાનજી દોશી ની ડેલી માંજે જગ્યા તેમના સુપુત્રોએ વિનામુલ્યે ટ્રસ્ટઆપેલછે. તે જગ્યામાં સર્વેદોશીભાઈઓ ના સહકારથી પાકુમકાન, ડીપવેલ,,સર્વે સુવિધા સાથેનું બનાવી વિક્રમસંવત૨૦૪૭ ના ભાદરવા સુદ-૧૨ ને શુક્રવાર તા. ૨૦-૯-૧૯૯૧ ના શુભદિને સંપૂર્ણ વિધી સર હોમ-હવન કરી સર્વે દોશીભાઈઓ ની હાજરીમાં સ્થાપના કરેલછે. સવાર-સાંજ આરતી ધુપ-દિપ માટે મહારાજરાખેલ છે.</p>
                  <p>  <FaArrowRight className='m-2' />શ્રી મણીલાલ સુંદરજી દોશી, શ્રી મગનલાલ હરિલાલદોશી, શ્રી વિનોદલાલ હરિલાલ દોશી શ્રી બાબુલાલમોતી ચંદદોશી, દિપકભાઈ હરગોવિંદભાઈ દોશીના સહકારથી તન,મન, અને ધનથી સેવા આપી શ્રી હેમચંદબાપા ની જગ્યાનું નિર્માણ થયેલ.</p>
                  <p> <FaArrowRight className='m-2' /> આ ગામમાં વંદનીય શેઠ શ્રી મણિલાલ સુંદરજી દોશી યુવાનો ના પ્રેરણામુર્તિ રહયા છે. આઝાદ હિંદફોજ માં સુભાષચંદ્ર  બોઝ સાથેરહયા. આરઝી હકુમત માં રહીને પ્રથમ અમરાપુર ને નવાબી તાબા માંથી મુકતકરાવ્યું. બુધ્ધિબળ નો ઉપયોગ કરી અમરાપુર ને ભારતના ઈતિહાસ માં અગ્રસ્થાન અપાવ્યું અત્યારે પણ એજ ઉમંગથી અમરાપુર માટે કાર્ય કરી રહયા છે.</p>
                  <p> <FaArrowRight className='m-2' />ભારતમાં પ્રથમ આર્ટ સિલ્ક ઉદ્યોગ લાવનાર શ્રી ચત્રભુજસુંદરજી હતા.</p>
                  <p> <FaArrowRight className='m-2' />શ્રી હરિલાલ જેચંદ દોશી જે મુંબઈ માં દશા શ્રીમાળી સ્થા. જૈન માંઅગ્રેસરહતા. દશા શ્રીમાળી સેવાસંઘ તથા દશા શ્રીમાળી ભોજનાલય તેમના અથાગ પરિશ્રમથી અસ્તિત્વ માંઆવેલ. આજે પણ ભોજનાલયમાં જૈનભાઈઓ ને માત્ર ત્રીસ રૂપિયામાં બન્ને ટાઈમ જમાડે છે. ઘાટકોપરમાં હિન્દુસભાહોસ્પીટલ, રાજકોટમાં એચ. જે. દોશી હોસ્પીટલ કરોડોના ખર્ચે બાંધી સર્વ કોમને લાભ આપે છે.</p>
                  <p> <FaArrowRight className='m-2' />શ્રી મગનલાલ હરિલાલ દોશી તથા વિનોદલાલ હરિલાલ દોશી આ હોસ્પિટલનું સુંદર સંચાલન કરે છે.</p>
                  <p> <FaArrowRight className='m-2' />કેળવણી ક્ષેત્રેપણ શ્રી જેચંદકાનજી દોશી તથા સુંદરજી હંસરાજ દોશી ના પરિવારે અગત્યની સેવા આપેલ છે.</p>
                  <p> <FaArrowRight className='m-2' />પૂ. સંતશ્રી આપા કાથડ અને આઈશ્રી માલુબાઈ ની સમાધી રામાપીર ની જગ્યામાંછે .આ કુટુંબમાં દર ત્રીજી પેઢીએ એક સંત હોય છે. હાલ યોગીપીર શ્રી શેરનાથબાપુ ગિરનાર તળેટીમાં આવેલશ્રી ત્રિલોકનાથબાપુ ની જગ્યામાં મહંતછે. રામાપીરની જગ્યાનો હાલ પુનરોધ્ધાર કરેલ છે.</p>
                  <p> <FaArrowRight className='m-2' />સ્વામીનારાયણ સંપ્રદાયના સંતશિરોમણી પ.પૂ. મુકતાનંદ સ્વામી નો જન્મ અમરાપુર માં થયો હતો.</p>
                  <p> <FaArrowRight className='m-2' />ચલાલા ના સંતશ્રી દાનબાપુ ના આશિર્વાદ થી તેણે બતાવેલ જગ્યા માં કુવો ખોદતાતે માંથી મીઠું પાણી નિકળેલ. બીજા કુવાના પાણી પીવાથી વાળાના રોગથતા, કુવો ખોદતા ગોપી નિકળ્યા હતા. તેથી કુવાનું નામ ગોપીકુવો રાખેલ, ત્યાર થી કહેવત પડી ગયેલકે</p>
                  <p className='ms-5 fw-bold'> “તળાવ કાંઠે તકિયો, ગોપી પાસે ગામ, ચોરા પાસે લીમડો, ભલે અમરાપુરગામ".</p>
                  <p> <FaArrowRight className='m-2' />ગામમાં કોલેજ , હાઈસ્કુલ , પ્રાથમિક શાળા, દવાખાનું, પોસ્ટઓફિસ , બેંક તથા ટેલીફોન નીસુવિધાછે. સ્થાનક વાસી જૈન ઉપાશ્રય તથા દોશી કુંટુબના સુરધન દેવહેમચંદ બાપા નું સ્થાનક ગામમાં છે.</p>
                  <p> <FaArrowRight className='m-2' />આજથી  અંદાજિત  ૧૦૭  વર્ષ  પહેલા  નાનકડા  છાપરા ના  મકાન  માં પાનબા  ના  ઠાકોરજી ની સ્થાપના કરવામાં આવી હતી ત્યાર પછી એક વર્ષ બાદ તે સમય ના યુવરાજ કુમાર પ.પૂ.ગો.શ્રી ૧૦૮ પુરુષોત્તમ લાલજી મહોદયશ્રી ની આજ્ઞા થી ઠાકોરજી ને અમરાપુર મંદિર માં પાટ પધરાવી વૈષ્ણવ પરિવાર ના કુળદેવતા તરીકે સ્થાપિત કરવા આજ્ઞા થઇ.સમય વીતતા મંદિર નો જીર્ણોદ્ધાર પ્રક્રિયા હાથ ધરવામાં આવી .ત્યાર બાદ વૈષ્ણવ પરિવારો પ્લોટ વિસ્તાર માં સ્થાનાંતરિત થતા શ્રી સાવંત ૨૦૭૦ ના ચૈત્રી વદ ૧૧ ને શુક્રવાર તા. ૧૧-૪-૨૦૧૪ ના દિવસે નૂતન નંદાલય  શ્રી બાલકૃષ્ણ લાલજી ની હવેલી નો પાટોત્સવ અને શતાબ્દી મહોત્સવ ના ઉપક્રમે પૂ.પ.શ્રી.ગો.૧૦૮ શ્રી દ્વારકેશ લાલજી મહારાજ ના કરકમળો દ્વારા પુષ્ટ કરી શ્રી ગોવર્ધન નાથજી પ્રભુ ને પાટ  પધરાવવા માં આવ્યા છે.</p>
                  <p> <FaArrowRight className='m-2' />ગામ માં "સૌનું ઘર" ટિફિન સેવા પણ તા :- ૧૪-૦૧-૨૦૨૪ થી  કાર્યરત છે.જેનું સંચાલન સરદાર પટેલ સેવા સંગઠન (અમરાપુર) દ્વારા ખુબજ સરસ રીતે આરોગ્યપ્રદ જમવાનું બપોરે તથા સાંજે ઘરે ઘરે પહોંચાડવાની તથા સંસ્થા માં પણ જમવાની વ્યવસ્થા છે.</p>

                </div>
              </div>
            </div>
            {/* <div className='col-6 text-end'>
              <img src='https://www.15gamkpsmain.com/assets/images/slider/umiya.jpg' className='img-fluid img-god' style={{ width: '70%' }} />
            </div> */}
          </div>
        </div>
      </div>
      {/* -------------------------- About US Stop -------------------------- */}


      {/* --------------------------------card-Carousel Section  Start ----------------------------------------*/}

      {/* <div className="container border-0 pt-3 pb-3">
        <div className="row mt-5">
          <div className='col-6'>
            <h3 className='text-center fw-semibold'>સામાજ ના હોદેદારો</h3>
            <div className='row'>
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



          <div className='col-6'>
            <h3 className='text-center fw-semibold'>એકમોના પ્રમુખ/મંત્રી</h3>
            <div className='row'>
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
        </div>



        <div className='row'>
          <div className='col-6 mt-4'>
            <h3 className='text-center fw-semibold'>વિકાસ ટ્રસ્ટ ના હોદ્દેદારો</h3>
            <div className='row'  >
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

          <div className='col-6 mt-4'>
            <h3 className='text-center fw-semibold'>સોશિયલ વેલ્ફેર ટ્રસ્ટ</h3>
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
      </div > */}
      {/* --------------------------------card-Carousel Section end ----------------------------------------*/}

      {/* --------------------------------card Section Start ----------------------------------------*/}
      <div className="container-fluid mt-5 EventsPart">
        <div className="container pt-3 pb-3">
          <h2 className='text-center fw-bold'>ઇવેન્ટસ</h2>
          <div className="row">
            <div className="col-lg-3 mb-3">
              <Card className='h-100 pt-3'>
                {/* <Card.Img variant="top" src={Event1} className='img-fluid h-75'  /> */}
                <Card.Body>
                  <Card.Title>
                    <h5 className='fw-bold'>સ્નેહમિલન(2021)</h5>
                  </Card.Title>
                  <Card.Text className='text-danger fw-semibold'>
                    2021-02-01
                  </Card.Text>
                  <button className='btn-moreRead' href='/Event1'>
                    વધુ વાંચો
                  </button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-3 mb-3">
              <Card  className='h-100'>
                {/* <Card.Img variant="top" src={Event2}  /> */}
                <Card.Body>
                  <Card.Title>
                    <h5 className='fw-bold'>સ્નેહમિલન(2022)</h5>
                  </Card.Title>
                  <Card.Text className='text-danger fw-semibold'>
                    2022-01-01
                  </Card.Text>
                  <button className='btn-moreRead' href='/Event2'>
                    વધુ વાંચો
                  </button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-3 mb-3">
              <Card  className='h-100'>
                {/* <Card.Img variant="top" src={Event3}  /> */}
                <Card.Body>
                  <Card.Title>
                    <h5 className='fw-bold'>સ્નેહમિલન(2023)</h5>
                  </Card.Title>
                  <Card.Text className='text-danger fw-semibold'>
                    2023-01-01
                  </Card.Text>
                  <button className='btn-moreRead' href='/Event3'>
                    વધુ વાંચો
                  </button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-3 mb-3">
              <Card  className='h-100'>
                {/* <Card.Img variant="top" src={Event27}  /> */}
                <Card.Body>
                  <Card.Title>
                    <h5 className='fw-bold'>સ્નેહમિલન(2024)</h5>
                  </Card.Title>
                  <Card.Text className='text-danger fw-semibold'>
                    2024-01-01
                  </Card.Text>
                  <button className='btn-moreRead' href='/Event4'>
                    વધુ વાંચો
                  </button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------card Section End ----------------------------------------*/}

      {/* --------------------------------Footer Section Start ----------------------------------------*/}
      <Footer />
      {/* --------------------------------Footer Section End ----------------------------------------*/}
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </>

  )
}

export default MainPage