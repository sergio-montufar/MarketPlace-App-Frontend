import {useMemo} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";


const SingleProduct = ({products, deleteProduct}) => {
  const navigate = useNavigate();

  const handleDelete = (event) => {
    // console.log(products)
    event.preventDefault();
    let currentProduct = products.find(product => product.id === parseInt(params.id));
    deleteProduct(currentProduct.id);
    navigate('/');
  }

  const params = useParams();

  const currentProduct = useMemo(() => products.find(product => product.id === parseInt(params.id)
  ), [params.id, products]);

  return (
  <div>
    <Link to={"/"}>
      <button>Go Back</button>
    </Link>
    <h1>{currentProduct.name}</h1>
    <img src={currentProduct.image} alt={currentProduct.name}/>
    <h2>{currentProduct.description}</h2>
    <h2>Price: {currentProduct.price}</h2>

    <Link to={`/edit/${params.id}`}>
      <button>Edit Product</button>
    </Link>
    
    <form onSubmit={handleDelete}>
      <input type='submit' value='Delete' />
      {/* ☰ */}
    </form>
  </div>
  )
}

export default SingleProduct;