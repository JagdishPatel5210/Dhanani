import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import AmaraVishe from './Pages/MainPage/AmaraVishe';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/AmaraVishe' element={<AmaraVishe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
