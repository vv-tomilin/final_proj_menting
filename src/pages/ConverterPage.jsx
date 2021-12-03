import { useState } from 'react';

const ConverterPage = () => {
  const [inputValue, setInputValue] = useState('');

  const changeInputValue = (event) => {
    let value = (event.target.validity.valid) ? event.target.value : inputValue;
    setInputValue(value);
  };
  return (
    <>
      <section className='converter-page'>
        <h1 className='visually-hidden'>Конвертер валют</h1>
        <div className='converter-page__settings-field'>
          <div className='converter-page__input-wrapper shadow-elem'>
            <input
              className='converter-page__input shadow-elem'
              onInput={changeInputValue}
              type='tel'
              pattern='[0-9]*'
              maxLength='10'
              value={inputValue} />
          </div>
          <button
            className='button 
                      converter-page__converted-currensy-btn 
                      shadow-text shadow-elem'>
            USD
          </button>
          <span
            className='converter-page__equal-sign shadow-text'>
            =
          </span>
          <button
            className='button 
                      converter-page__convert-to-currensy-btn 
                      shadow-text shadow-elem'>
            RUB
          </button>
        </div>
        <div className='converter-page__result-field'>Выберите валюты для конвертации...</div>
        <button className='button converter-page__convert-button 
                          shadow-elem 
                          shadow-text'>Конвертировать</button>
      </section>
    </>
  );
};

export default ConverterPage;