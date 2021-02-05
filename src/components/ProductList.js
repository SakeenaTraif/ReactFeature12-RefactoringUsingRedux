//redux
import {BsPlusSquare} from "react-icons/bs";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
// Styling
import { ListWrapper,AddButtonStyled } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";


const ProductList = () => {
  const products = useSelector((state) => state.products);
  const [query, setQuery] = useState("");

   const productList = products.map((product) => (
      <ProductItem product={product}/>
  ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <Link to="/products/new">
        <AddButtonStyled>
          <BsPlusSquare/>
        </AddButtonStyled>
      </Link>
      <ListWrapper>{productList}</ListWrapper>
    </div>
  );
};
export default ProductList;