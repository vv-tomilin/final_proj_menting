import { useState } from 'react';

const ConverterSettingsField = () => {

  const [inputValue, setInputValue] = useState('');

  const changeInputValue = (event) => {
    let value = (event.target.validity.valid) ? event.target.value : inputValue;
    setInputValue(value);
  };

  return (
    <div className='converter-settings-field'>
      <div className='converter-settings-field__input-wrapper shadow-elem'>
        <input
          className='converter-settings-field__input shadow-elem'
          onInput={changeInputValue}
          type='tel'
          pattern='[0-9]*'
          maxLength='12'
          value={inputValue} />
      </div>
      <div className='converter-settings-field__buttons-wrapper'>
        <button
          className='button 
                      converter-settings-field__converted-currensy-btn 
                      shadow-text shadow-elem'>
          USD
        </button>
        <span
          className='converter-settings-field__equal-sign shadow-text'>
          =
        </span>
        <button
          className='button 
                      converter-settings-field__convert-to-currensy-btn 
                      shadow-text shadow-elem'>
          RUB
        </button>
      </div>
    </div>
  );
};

export default ConverterSettingsField;