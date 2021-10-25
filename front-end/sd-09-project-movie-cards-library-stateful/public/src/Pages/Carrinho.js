import React from 'react';
import PropTypes from 'prop-types';
import CardShoppingCartList from '../Components/CardShoppingCartList';

class Carrinho extends React.Component {
  render() {
    const { totalCart } = this.props;
    return (
      <div>
        <CardShoppingCartList totalShoppingCart={ totalCart } />
      </div>
    );
  }
}

Carrinho.propTypes = {
  totalCart: PropTypes.arrayOf().isRequired,
};

export default Carrinho;
