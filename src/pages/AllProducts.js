import Product from "../components/Product";
import { Link } from "react-router-dom";

const AllProducts = (props) => (
  <div className="allProducts">
    <Link to='/new'>
      <button>Create A Product</button>
    </Link>
    {props.products.map(
      (product) => <Product product={product} key={product.id} deleteProduct={props.deleteProduct} />
    )}
  </div>
)

export default AllProducts;