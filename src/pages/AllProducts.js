import Product from "../components/Product";
import { Link } from "react-router-dom";

const AllProducts = (props) => (
  <>
    <Link to='/new'>
      <button id="create-button">Create A Product</button>
    </Link>
    <div className="allProducts">
      
      {props.products.map(
        (product) => <Product product={product} key={product.id} deleteProduct={props.deleteProduct} />
      )}
    </div>
  </>
  
)

export default AllProducts;