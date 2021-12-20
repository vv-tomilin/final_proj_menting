export const setChangeBaseCurrency = (curr) => ({
  type: 'SET_CHANGE_BASE_CURRENCY',
  payload: curr
});

export const setExchangeRates = (rates) => ({
  type: 'SET_EXCHANGE_RATES',
  payload: rates
});

export const setIsLoadedRates = (bool) => ({
  type: 'SET_IS_LOADED_RATES',
  payload: bool
});

export const fetchExchangeRates = (baseCurr) => (dispatch) => {
  fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${baseCurr}.json`)
    .then((response) => {
      return response.json();
    })
    .then((rates) => {
      const arr = Object.entries(Object.values(rates)[1])
      dispatch(setExchangeRates(arr));
    })
    .then(() => {
      dispatch(setIsLoadedRates(true));
    })
    .catch((e) => {
      console.log(e);
    });
};