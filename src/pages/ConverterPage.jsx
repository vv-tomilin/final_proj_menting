import ConverterSettingsField from "../components/ConverterSettingsField";

const ConverterPage = () => {

  return (
    <>
      <section className='converter-page'>
        <h1 className='visually-hidden'>Конвертер валют</h1>
        <ConverterSettingsField />
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