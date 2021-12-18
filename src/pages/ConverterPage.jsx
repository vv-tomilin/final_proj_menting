import { useState, useEffect } from 'react';

import ConverterSettingsField from "../components/ConverterSettingsField";

const ConverterPage = ({ currencysList }) => {

  const [inputValue, setInputValue] = useState('0');

  const [result, setResult] = useState('Выберите валюты для конвертации...');

  const [baseCurr, setBaseCurr] = useState('usd');
  const [convertCurr, setConvertCurr] = useState('rub');
  const [rate, setRate] = useState(0);

  const changeInputValue = (event) => {
    let value = (event.target.validity.valid) ? event.target.value : inputValue;
    setInputValue(value);
  };

  const selectBaseCurr = (curr) => {
    setBaseCurr(curr);
  };

  const selectConvertCurr = (curr) => {
    setConvertCurr(curr)
  };

  const resultCalc = () => {
    const result = Number(inputValue) * rate;
    setResult(String(result.toFixed(2)));
  };

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${baseCurr}/${convertCurr}.json`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const rate = Object.values(json)[1];
        setRate(rate);
      })
  }, [baseCurr, convertCurr]);

  useEffect(() => {
    setResult('Выберите валюты для конвертации...');
  }, [inputValue]);

  return (
    <>
      <section className='converter-page'>
        <h1 className='visually-hidden'>Конвертер валют</h1>
        <ConverterSettingsField
          currencysList={currencysList}
          inputValue={inputValue}
          changeInputValue={changeInputValue}
          baseCurr={baseCurr}
          selectBaseCurr={selectBaseCurr}
          convertCurr={convertCurr}
          selectConvertCurr={selectConvertCurr} />
        <div className='converter-page__result-field'>
          {result === 'Выберите валюты для конвертации...'
            ? 'Выберите валюты для конвертации...'
            : `${inputValue} ${baseCurr.toUpperCase()} = ${result} ${convertCurr.toUpperCase()}`
          }
        </div>
        <button className='button converter-page__convert-button 
                          shadow-elem 
                          shadow-text'
          onClick={resultCalc}>
          Конвертировать
        </button>
      </section>
    </>
  );
};

export default ConverterPage;