//redux
import {useSelector} from "react-redux";
import { Link, Redirect, useParams } from "react-router-dom";
// Components
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
// Styling
import { DetailWrapper } from "../styles";


const ProductDetail = () => {
      const products = useSelector((state) => state.products);
      const productSlug = useParams().productSlug;
      const product = products.find((product) => product.slug === productSlug);

  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <Link to="/products">Back to Products</Link>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton productId={product.id}  />
      <UpdateButton slug={product.slug}/>
    </DetailWrapper>
  );
};

export default ProductDetail;
