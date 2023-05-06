import { useState, useEffect } from "react";
import Header from "./components/Header";
import AllProducts from "./pages/AllProducts";
import SingleProduct from "./pages/SingleProduct";
import Form from "./pages/Form";
import Home from "./pages/Home";
import './App.css';



import { Route, Routes } from "react-router-dom";

const apiURL = "https://homehaven.herokuapp.com"

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(apiURL + "/Products/");
    const data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, [])

  const handleFormSubmission = async (data, type) => {
    if (type === 'new') {
      // eslint-disable-next-line
      const response = await fetch(`${apiURL}/Products/`, {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      getProducts();
    } else {
      // eslint-disable-next-line
      const response = await fetch(`${apiURL}/Products/${data.id}/`, {
        method: "put", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      getProducts();
    }
  }

  const deleteProduct = async (id) => {
    // eslint-disable-next-line
    const response = await fetch(`${apiURL}/Products/${id}/`, {
      method: 'delete'
    })
    getProducts();
  }


  return (
    <div className="App">
      <Header/>
      
      <h1>HomeHaven</h1>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route
          exact
          path='/products'
          element={<AllProducts products={products}/>}
        />
        <Route
          path='/products/:id'
          element={<SingleProduct products={products} deleteProduct={deleteProduct}/>}
        />
        <Route 
          path="/new"
          element={<Form products={products} handleSubmission={handleFormSubmission} buttonLabel='Add Product' formType='new'/>}
        />
        <Route
          path='/edit/:id'
          element={<Form products={products} handleSubmission={handleFormSubmission} buttonLabel='Edit Blog' formType='edit'/>}
        />
      </Routes>
    </div>
  );
}

export default App;
