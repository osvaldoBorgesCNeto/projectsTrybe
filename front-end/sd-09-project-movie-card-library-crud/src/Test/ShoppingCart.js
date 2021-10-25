import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        <h1>Seu carrinho está vazio</h1>
      </div>
    );
  }
}

export default ShoppingCart;
