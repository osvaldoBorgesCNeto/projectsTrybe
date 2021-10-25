import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getItemAction, removeItem } from '../actions';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.buttonEdit = this.buttonEdit.bind(this);
  }

  buttonEdit(expense) {
    const { editItemFunc } = this.props;

    return (
      <button
        type="button"
        data-testid="edit-btn"
        onClick={ () => editItemFunc(expense) }
      >
        Editar
      </button>
    );
  }

  render() {
    const { expenses, removeItemFunc } = this.props;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{expense.exchangeRates[expense.currency].name}</td>
                <td>{(expense.exchangeRates[expense.currency].ask * 1).toFixed(2)}</td>
                <td>
                  {(expense.exchangeRates[expense.currency].ask * expense.value)
                    .toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  {this.buttonEdit(expense)}
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => removeItemFunc(expenses, expense.id) }
                  >
                    Deleta
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeItemFunc: (expenses, id) => dispatch(removeItem(expenses, id)),
  editItemFunc: (expense) => dispatch(getItemAction(expense)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  removeItemFunc: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
