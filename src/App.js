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
        <Route exact path='/' element={<ConverterPage />} />
        <Route exact path='/currencys' element={<CurrencysRatesPage />} />
        <Route exact path='/cripto' element={<CriptoRatesPage />} />
      </Routes>
    </>
  );
}

export default App;
