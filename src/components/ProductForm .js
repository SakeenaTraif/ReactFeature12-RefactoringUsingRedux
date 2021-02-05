//react
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
// Styling
import { Form } from "../styles";
//Actions
import { addProduct, updateProduct } from "../store/actions";


const ProductForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {productSlug} = useParams();
  const foundProduct = useSelector((state) => state.products.find((product) => product.slug === productSlug));

  const [product, setProduct] = useState(foundProduct ?? 
      { name: "",
      description: "",
      price: 0,
      image:"",}
    );

const handleChange = (event) =>
    setProduct({ ...product, [event.target.name]: event.target.value });

const resetForm = () =>
    setProduct({
      name: "",
      description: "",
      price: 0,
      image:"",
    });


const handleSubmit = (event) => {
        event.preventDefault();
        if (foundProduct) dispatch(updateProduct(product));
        else dispatch(addProduct(product));
        history.push("/products");
        resetForm();
      };
    
    return (
        <Form onSubmit={handleSubmit}>
          <h1>{foundProduct ? "Update " : "Create" } Product </h1>
            
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="btn btn-outline-info ">Name*</span>
            </div>
            <input
              required
              className="form-control"
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="btn btn-outline-info">description*</span>
            </div>
            <input
              className="form-control"
              type="text"
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="btn btn-outline-info">Price*</span>
            </div>
            <input
              className="form-control"
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="btn btn-outline-info">Image*</span>
            </div>
            <input
              className="form-control"
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button className="btn btn-info" type="submit">
            {foundProduct ? "Update " : "Create" }
            </button>
          </div>
        </Form>
      );
    };

    export default ProductForm;
