import {useMemo} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";


const SingleProduct = ({products, deleteProduct}) => {
  const navigate = useNavigate();

  const handleDelete = (event) => {
    // console.log(products)
    event.preventDefault();
    let currentProduct = products.find(product => product.id === parseInt(params.id));
    deleteProduct(currentProduct.id);
    navigate('/products');
  }

  const params = useParams();

  const currentProduct = useMemo(() => products.find(product => product.id === parseInt(params.id)
  ), [params.id, products]);

  return (
  <div>
    <Link to={"/products"}>
      <button className="go-back">Go Back</button>
    </Link>
    <h1>{currentProduct.name}</h1>
    <img src={currentProduct.image} alt={currentProduct.name}/>
    <h2>{currentProduct.description}</h2>
    <h2>Price: ${currentProduct.price}</h2>

    <Link to={`/edit/${params.id}`}>
      <button id="edit-button">Edit Product</button>
    </Link>
    
    <form onSubmit={handleDelete}>
      <input id="delete-button" type='submit' value='Delete' />
      {/* ☰ */}
    </form>
  </div>
  )
}

export default SingleProduct;