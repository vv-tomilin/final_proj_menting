import { useState } from 'react';

const ConverterSettingsField = ({ inputValue, changeInputValue, currencysList }) => {

  const [toggleConvertedList, setToggleConvertedList] = useState(false);
  const [toggleConvertList, setToggleConvertList] = useState(false);

  const toggleChangeConverted = () => {
    setToggleConvertedList(!toggleConvertedList);
  };

  const toggleChangeConvert = () => {
    setToggleConvertList(!toggleConvertList);
  };

  return (
    <div className='converter-settings-field'>
      <div className='converter-settings-field__input-wrapper shadow-elem'>
        <input
          className='converter-settings-field__input shadow-elem'
          onChange={changeInputValue}
          type='text'
          pattern='[0-9]*'
          maxLength='12'
          value={inputValue} />
      </div>
      <div className='converter-settings-field__buttons-wrapper'>
        <div className='button-wrapper'>
          <button
            className='button 
                      converter-settings-field__converted-currensy-btn 
                      shadow-text shadow-elem'
            onClick={toggleChangeConverted}>
            USD
          </button>
          {toggleConvertedList &&
            <ul className='converter-settings-field__converted-list currensys-list'>
              {
                currencysList && currencysList.map((curency, index) => (
                  <li
                    className='converter-settings-field__converted-item currensys-item shadow-elem'
                    key={index}>{curency}</li>
                ))
              }
            </ul>
          }
        </div>
        <span
          className='converter-settings-field__equal-sign shadow-text'>
          =
        </span>
        <div className='button-wrapper'>
          <button
            className='button 
                      converter-settings-field__convert-to-currensy-btn 
                      shadow-text shadow-elem'
            onClick={toggleChangeConvert}>
            RUB
          </button>
          {toggleConvertList &&
            <ul className='converter-settings-field__convert-list currensys-list'>
              {
                currencysList && currencysList.map((curency, index) => (
                  <li
                    className='converter-settings-field__convert-item currensys-item shadow-elem'
                    key={index}>{curency}</li>
                ))
              }
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default ConverterSettingsField;