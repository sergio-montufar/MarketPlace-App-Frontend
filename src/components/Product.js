import { Link } from "react-router-dom"

const Product = ({product}) => {
  
  return (
    <div className="product">
      <Link to={`/products/${product.id}`}>
        <h1>{product.name}</h1>
      </Link>
      <h2>{product.description}</h2>
    </div>
  )
}

export default Product;