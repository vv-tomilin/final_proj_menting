import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import ConverterPage from './pages/ConverterPage';
import CurrencysRatesPage from './pages/CurrencysRatesPage';

import './styles/main.css';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ConverterPage />} />
        <Route path='/currencys' element={<CurrencysRatesPage />} />
      </Routes>
    </>
  );
}

export default App;
