import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.inputCategory = this.inputCategory.bind(this);
  }

  inputCategory(id) {
    return (
      <div data-testid="category">
        <label htmlFor={ `categoria_${id}` }>
          <input
            type="checkbox"
            id={ `categoria_${id}` }
            name={ `categoria_${id}` }
            value={ `categoria_${id}` }
          />
          {`Categoria ${id}`}
        </label>
      </div>
    );
  }

  render() {
    return (
      <div data-testid="home-initial-message">
        <section>
          Categorias:
          {this.inputCategory('01')}
          {this.inputCategory('02')}
          {this.inputCategory('03')}
        </section>
        <div>
          <input type="text" />
          <Link to="/shoppingCart" data-testid="shopping-cart-button">Carrinho</Link>
        </div>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    );
  }
}

export default Search;
