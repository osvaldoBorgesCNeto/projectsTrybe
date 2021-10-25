import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import imgKart from '../Images/botaoCarrinho.jpg';
import './Pages.css';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { product } }, totalCart } = this.props;
    const { title, price, thumbnail } = product;

    return (
      <div>
        <div className="nav-details">
          <Link to="/">&#8678;</Link>
          <Link data-testid="shopping-cart-button" to="/carrinho">
            <img src={ imgKart } alt="ShopCartImg" />
          </Link>
        </div>
        <section className="main-shoppingCart">
          <p data-testid="product-detail-name">{`${title} - R$ ${price}`}</p>
          <div className="img-details">
            <img src={ thumbnail } alt={ title } />
            <div className="product-details">
              <h3>Especificações tecnicas</h3>
              <p>Produto muito bom, compre logo.</p>
            </div>
          </div>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => totalCart(product) }
          >
            Adicionar no Carrinho
          </button>
        </section>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
      }),
    }),
  }).isRequired,
  totalCart: PropTypes.func.isRequired,
};

export default ProductDetails;
