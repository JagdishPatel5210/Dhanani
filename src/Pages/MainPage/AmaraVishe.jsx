import React from 'react'
import background from '../../Images/background.webp'
import { NavLink, Link } from 'react-router-dom';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer';
import MainLogo from '../../Images/MainLogo.png'
import Button from 'react-bootstrap/Button';
import MainPage from './MainPage';



export default function AmaraVishe() {
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
              </div>
              <div className='col-6'>
                <img src='https://www.15gamkpsmain.com/assets/images/slider/umiya.jpg' className='img-fluid  shadow-lg bg-white rounded w-75' />
              </div>
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
