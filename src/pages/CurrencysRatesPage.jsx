const CurrencysRatesPage = () => {
  return (
    <>
      <h1 className='visually-hidden'>Курсы валют</h1>
      <div className="currencys-page">
        <div className='currencys-page__base-select-wrapper'>
          <span className='currencys-page__base-select-label'>Базовая валюта:</span>
          <button className='currencys-page__base-select-button'>EUR</button>
        </div>
        <ul className='currencys-page__currencys-list'>
          <li className='currencys-page__list-item'>
            <span className='currencys-page__item-tiker'>USD</span>
            <span className='currencys-page__item-rate'>1.0256</span>
          </li>
          <li className='currencys-page__list-item'>
            <span className='currencys-page__item-tiker'>RUB</span>
            <span className='currencys-page__item-rate'>1.0256</span>
          </li>
          <li className='currencys-page__list-item'>
            <span className='currencys-page__item-tiker'>GBP</span>
            <span className='currencys-page__item-rate'>1.0256</span>
          </li>
          <li className='currencys-page__list-item'>
            <span className='currencys-page__item-tiker'>JPY</span>
            <span className='currencys-page__item-rate'>1.0256</span>
          </li>
          <li className='currencys-page__list-item'>
            <span className='currencys-page__item-tiker'>AUD</span>
            <span className='currencys-page__item-rate'>1.0256</span>
          </li>
          <li className='currencys-page__list-item'>
            <span className='currencys-page__item-tiker'>CNY</span>
            <span className='currencys-page__item-rate'>1.0256</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CurrencysRatesPage;