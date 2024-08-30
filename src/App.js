import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import FormPage from './Pages/MainPage/FormPage';
import AmaraVishe from './Pages/MainPage/AmaraVishe';
import Header from './Components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/FormPage' element={<FormPage />} />
          <Route path='/MainPage' element={<MainPage />} />
          <Route path='/AmaraVishe' element={<AmaraVishe />} />
          <Route path='/Header' element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
