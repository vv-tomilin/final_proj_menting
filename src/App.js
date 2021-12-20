import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import ConverterPage from './pages/ConverterPage';
import CurrencysRatesPage from './pages/CurrencysRatesPage';

import './styles/main.css';

function App() {

  const currencysList = ['rub', 'usd', 'eur', 'gbp', 'jpy', 'cny', 'aud', 'cad'];

  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <ConverterPage
              currencysList={currencysList} />
          } />
        <Route
          path='/currencys'
          element={
            <CurrencysRatesPage
              currencysList={currencysList} />
          } />
      </Routes>
    </>
  );
}

export default App;
