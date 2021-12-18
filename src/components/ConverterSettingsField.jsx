import { useState } from 'react';

const ConverterSettingsField = (
  {
    inputValue,
    changeInputValue,
    currencysList,
    baseCurr,
    selectBaseCurr,
    convertCurr,
    selectConvertCurr
  }) => {

  const [toggleConvertedList, setToggleConvertedList] = useState(false);
  const [toggleConvertList, setToggleConvertList] = useState(false);

  const toggleChangeBase = () => {
    setToggleConvertedList(!toggleConvertedList);
  };

  const toggleChangeConvert = () => {
    setToggleConvertList(!toggleConvertList);
  };

  const selectBase = (curr) => {
    selectBaseCurr(curr);
    setToggleConvertedList(!toggleConvertedList);
  };
  const selectConvert = (curr) => {
    selectConvertCurr(curr);
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
            onClick={toggleChangeBase}>
            {baseCurr.toUpperCase()}
          </button>
          {toggleConvertedList &&
            <ul className='converter-settings-field__converted-list currensys-list'>
              {
                currencysList && currencysList.map((curency, index) => (
                  <li
                    className='converter-settings-field__converted-item currensys-item shadow-elem'
                    onClick={() => selectBase(curency)}
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
                    className='converter-settings-field__convert-item currensys-item shadow-elem'
                    onClick={() => selectConvert(curency)}
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