import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setChangeBaseCurrency } from "../redux/actions/exchangeRates";
import { fetchExchangeRates, setIsLoadedRates } from "../redux/actions/exchangeRates";

const CurrencysRatesPage = ({ currencysList }) => {

  const dispatch = useDispatch();
  const { baseCurr, rates, isLoaded } = useSelector(({ exchangeRates }) => exchangeRates);

  const [showRates, setShowRates] = useState([]);
  const [toglleBaseCurrList, setToggleBAseCurrList] = useState(false);

  const toggleBase = () => {
    setToggleBAseCurrList(!toglleBaseCurrList);
  }

  const changeBaseCurr = (curr) => {
    dispatch(setChangeBaseCurrency(curr));
    toggleBase();
  }

  useEffect(() => {

    if (isLoaded) {
      const showRates = rates.filter((elem) => {
        if (currencysList.includes(elem[0]) && elem[0] !== baseCurr) {
          return elem;
        }
      });

      setShowRates(showRates);

      dispatch(setIsLoadedRates(false));
    }
  }, [baseCurr, isLoaded, rates]);

  useEffect(() => {
    dispatch(fetchExchangeRates(baseCurr));
  }, [baseCurr]);

  return (
    <>
      <h1 className='visually-hidden'>Курсы валют</h1>
      <div className="currencys-page">
        <div className='currencys-page__base-select-wrapper'>
          <span className='currencys-page__base-select-label'>Базовая валюта:</span>
          <div className='button-wrapper' >
            <button
              className='currencys-page__base-select-button button shadow-elem shadow-text'
              onClick={toggleBase}>
              {baseCurr.toUpperCase()}
            </button>
            <ul className='currencys-page__base-curr-list currensys-list'>
              {toglleBaseCurrList &&
                currencysList.map((curr, index) => (
                  <li
                    className='currencys-page__base-curr-item shadow-elem'
                    key={index}
                    onClick={() => changeBaseCurr(curr)}>
                    {curr}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <ul className='currencys-page__currencys-list'>
          {
            showRates && showRates.map((item) => (
              <li
                key={item[0]}
                className='currencys-page__list-item shadow-elem shadow-text'>
                <span className='currencys-page__item-tiker'>{item[0].toUpperCase()}</span>
                <span className='currencys-page__item-rate'>{item[1].toFixed(3)}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
};

export default CurrencysRatesPage;