import { useState, useEffect } from 'react';

import ConverterSettingsField from "../components/ConverterSettingsField";

const ConverterPage = ({ currencysList }) => {

  const [inputValue, setInputValue] = useState('');

  const changeInputValue = (event) => {
    let value = (event.target.validity.valid) ? event.target.value : inputValue;
    setInputValue(value);
  };

  useEffect(() => {

  }, [])

  return (
    <>
      <section className='converter-page'>
        <h1 className='visually-hidden'>Конвертер валют</h1>
        <ConverterSettingsField
          currencysList={currencysList}
          inputValue={inputValue}
          changeInputValue={changeInputValue} />
        <div className='converter-page__result-field'>Выберите валюты для конвертации...</div>
        <button className='button converter-page__convert-button 
                          shadow-elem 
                          shadow-text'>
          Конвертировать
        </button>
      </section>
    </>
  );
};

export default ConverterPage;