import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

import ConverterPage from './pages/ConverterPage';
import CriptoRatesPage from './pages/CriptoRatesPage';
import CurrencysRatesPage from './pages/CurrencysRatesPage';

import './styles/main.css';

function App() {
  return (
    <>
      <nav className='app__navigation'>
        <Link className='router-link' to="/">
          <div className='app__navigation-tab app__navigation-tab--active'>Конверер</div>
        </Link>
        <Link className='router-link' to="/currencys">
          <div className='app__navigation-tab'>Курсы валют</div>
        </Link>
        <Link className='router-link' to="/cripto">
          <div className='app__navigation-tab'>Курсы криптовалют</div>
        </Link>
      </nav>
      <Routes>
        <Route exact path='/' element={<ConverterPage />} />
        <Route exact path='/currencys' element={<CurrencysRatesPage />} />
        <Route exact path='/cripto' element={<CriptoRatesPage />} />
      </Routes>
    </>
  );
}

export default App;
