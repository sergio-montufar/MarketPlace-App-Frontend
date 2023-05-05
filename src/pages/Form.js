import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Form = (props) => {
  const navigate = useNavigate();
  const params = useParams();

  const currentProduct = useMemo(() => props.products.find(product => product.id === parseInt(params.id)
  ), [params.id, props.products])

  const [formData, setFormData] = useState(
    props.formType === 'new' ? {
      name: '',
      image: undefined,
      description: '',
      price: 0.00
    } : {
      id: parseInt(currentProduct.id),
      name: currentProduct.name,
      image: currentProduct.image,
      description: currentProduct.description,
      price: currentProduct.price
    }
  )

  const handleChange = (event) => {
    setFormData((prev) => (
      {
        ...prev,
        [event.target.name]: event.target.value
      }
    ))
  }

  const handleSubmission = (event) => {
    event.preventDefault();
    props.handleSubmission(formData, props.formType);
    navigate('/');
  }


  return (
    <form onSubmit={handleSubmission}>
      <h3>Name</h3>
      <input
        type='text'
        onChange={handleChange}
        value={formData.name}
        name='name'
      />
      <h3>Image</h3>
      <input
        type='image'
        onChange={handleChange}
        src={formData.image}
        alt={formData.name}
        name='image'
      />
      <h3>Description</h3>
      <input
        type='text'
        onChange={handleChange}
        value={formData.description}
        name='description'
      />
      <h3>Price</h3>
      <input
        type='number'
        onChange={handleChange}
        value={formData.price}
        name='price'
      />
      <input type='submit' value={props.buttonLabel} />
      <Link to={"/"}>
        <button>Go Back</button>
      </Link>
    </form>
  )
}

export default Form;