import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

function ProductCard(props) {
  const { product } = props;
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title id="product-name">{product.name}</Card.Title>
        </Link>
        <Card.Text className="product-info"></Card.Text>
        <Card.Text>{product.protein}g</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
