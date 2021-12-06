import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import ConverterPage from './pages/ConverterPage';
import CriptoRatesPage from './pages/CriptoRatesPage';
import CurrencysRatesPage from './pages/CurrencysRatesPage';

import './styles/main.css';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ConverterPage />} />
        <Route path='/currencys' element={<CurrencysRatesPage />} />
        <Route path='/cripto' element={<CriptoRatesPage />} />
      </Routes>
    </>
  );
}

export default App;
