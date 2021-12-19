import { useState } from 'react';

const ConverterSettingsField = (
  {
    inputValue,
    changeInputValue,
    currencysList,
    baseCurr,
    convertCurr,
    selectBase,
    selectConvert
  }) => {

  const [toggleConvertedList, setToggleConvertedList] = useState(false);
  const [toggleConvertList, setToggleConvertList] = useState(false);

  const toggleChangeConverted = () => {
    setToggleConvertedList(!toggleConvertedList);
  };

  const toggleChangeConvert = () => {
    setToggleConvertList(!toggleConvertList);
  };

  const selectBaseCurr = (curr) => {
    selectBase(curr);
    toggleChangeConverted();
  };

  const selectConvertCurr = (curr) => {
    selectConvert(curr);
    toggleChangeConvert();
  };

  return (
    <div className='converter-settings-field'>
      <div className='converter-settings-field__input-wrapper shadow-elem'>
        <input
          className='converter-settings-field__input shadow-elem'
          placeholder='0'
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
            {baseCurr.toUpperCase()}
          </button>
          {toggleConvertedList &&
            <ul className='converter-settings-field__converted-list currensys-list'>
              {
                currencysList && currencysList.map((curency, index) => (
                  <li
                    onClick={() => selectBaseCurr(curency)}
                    className='converter-settings-field__converted-item currensys-item shadow-elem'
                    key={index}>{curency}</li>
                ))
              }
            </ul>
          }
        </div>
        <span
          className='converter-settings-field__equal-sign shadow-text'>
          {`>`}
        </span>
        <div className='button-wrapper'>
          <button
            className='button 
                      converter-settings-field__convert-to-currensy-btn 
                      shadow-text shadow-elem'
            onClick={toggleChangeConvert}>
            {convertCurr.toUpperCase()}
          </button>
          {toggleConvertList &&
            <ul className='converter-settings-field__convert-list currensys-list'>
              {
                currencysList && currencysList.map((curency, index) => (
                  <li
                    onClick={() => selectConvertCurr(curency)}
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