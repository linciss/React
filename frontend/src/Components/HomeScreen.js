import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen() {
  return (
    <>
      {' '}
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div class="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p id="product-name">{product.name}</p>
              </Link>
              <p>
                <strong>{product.protein}g</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeScreen;
