import { Link } from "react-router-dom"

const Product = ({product}) => {
  
  return (
    <div>
      <Link to={`/product/${product.id}`}>
        <h1>{product.name}</h1>
      </Link>
      <h2>{product.description}</h2>
    </div>
  )
}

export default Product;