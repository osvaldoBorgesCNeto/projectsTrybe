import React from 'react';
import PropTypes from 'prop-types';

class CardShoppingCart extends React.Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;

    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

CardShoppingCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default CardShoppingCart;
