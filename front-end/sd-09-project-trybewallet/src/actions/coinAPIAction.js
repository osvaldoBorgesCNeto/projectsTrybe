import coinAPI from '../service/coinAPI';

export const GET_CURRENCIES = 'GET_CURRENCIES';

function getCurrencies(currencies) {
  const currenciesFilter = currencies
    .filter((currency) => currency !== 'USDT');
  return { type: GET_CURRENCIES, currencies: currenciesFilter };
}

export const thunkWalletAction = () => async (dispatch) => {
  const result = await coinAPI();
  return dispatch(getCurrencies(Object.keys(result)));
};

export const GET_EXPENSES = 'GET_EXPENSES';

export const expensesAction = (expenses) => ({ type: GET_EXPENSES, expenses });

export const thunkExpensesAction = (expenses) => async (dispatch) => {
  const result = await coinAPI();
  return dispatch(expensesAction({ ...expenses, exchangeRates: result }));
};
