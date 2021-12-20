const initialState = {
  baseCurr: 'usd',
  rates: [],
  isLoaded: false
};

function exchangeRates(state = initialState, action) {
  switch (action.type) {
    case 'SET_CHANGE_BASE_CURRENCY':
      return {
        ...state,
        baseCurr: action.payload
      }
      case 'SET_EXCHANGE_RATES':
        return {
          ...state,
          rates: action.payload
        }
        case 'SET_IS_LOADED_RATES':
          return {
            ...state,
            isLoaded: action.payload
          }
    default: return state;
  }
}

export default exchangeRates;