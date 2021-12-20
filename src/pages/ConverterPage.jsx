import { useState, useEffect } from 'react';

import ConverterSettingsField from "../components/ConverterSettingsField";

const ConverterPage = ({ currencysList }) => {

  const resultPlaceholder = 'Выберите валюты для конвертации...';

  const [inputValue, setInputValue] = useState('');

  const [baseCurr, setBaseCurr] = useState('usd');
  const [convertCurr, setConvertCurr] = useState('rub');

  const [rate, setRate] = useState(0);

  const [convertResult, setConvertResult] = useState(resultPlaceholder);

  const changeInputValue = (event) => {
    let value = (event.target.validity.valid) ? event.target.value : inputValue;
    setInputValue(String(Number(value)));
  };

  const selectBase = (curr) => {
    setBaseCurr(curr);
  };

  const selectConvert = (curr) => {
    setConvertCurr(curr);
  };

  const convertClick = () => {
    const result = Number(inputValue) * rate;
    setConvertResult(String(result.toFixed(2)));
  };

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${baseCurr}/${convertCurr}.json`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const result = Object.values(json)[1];
        setRate(result);
      })
      .catch((e) => {
        console.log(e);
      });

    setConvertResult(resultPlaceholder);
  }, [baseCurr, convertCurr, inputValue]);

  return (
    <>
      <section className='converter-page'>
        <h1 className='visually-hidden'>Конвертер валют</h1>
        <ConverterSettingsField
          baseCurr={baseCurr}
          convertCurr={convertCurr}
          selectBase={selectBase}
          selectConvert={selectConvert}
          currencysList={currencysList}
          inputValue={inputValue}
          changeInputValue={changeInputValue} />
        <div className='converter-page__result-field'>
          {convertResult === resultPlaceholder
            ? resultPlaceholder
            : `${inputValue} ${baseCurr.toUpperCase()} = ${convertResult} ${convertCurr.toUpperCase()}`}
        </div>
        <button className='button converter-page__convert-button 
                          shadow-elem 
                          shadow-text'
          onClick={convertClick}>
          Конвертировать
        </button>
      </section>
    </>
  );
};

export default ConverterPage;