import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import FormPage from './Pages/MainPage/FormPage';
import AmaraVishe from './Pages/MainPage/AmaraVishe';
import Header from './Components/Header';
import Karobari from '../src/Pages/MainPage/Karobari';
import SamajNaSabhyo from './Pages/MainPage/SamajNaSabhyo';
import Jaherat from './Pages/MainPage/Jaherat';
import ContactUs from './Pages/MainPage/ContactUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/FormPage' element={<FormPage />} />
          <Route path='/Karobari' element={<Karobari />} />
          <Route path='/MainPage' element={<MainPage />} />
          <Route path='/AmaraVishe' element={<AmaraVishe />} />
          <Route path='/SamajNaSabhyo' element={<SamajNaSabhyo />} />
          <Route path='/Jaherat' element={<Jaherat />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/Header' element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
