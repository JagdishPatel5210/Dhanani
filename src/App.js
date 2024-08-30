import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import FormPage from './Pages/MainPage/FormPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/FormPage' element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
