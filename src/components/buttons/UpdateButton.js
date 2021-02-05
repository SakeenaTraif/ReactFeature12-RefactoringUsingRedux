import products from "../../products"

import { EditButtonStyled } from "../../styles";
import { Link } from "react-router-dom";


const UpdateButton =({slug}) =>{
    return (
            <Link to={`/products/${slug}/edit`}>
                <EditButtonStyled>Edit</EditButtonStyled>
            </Link>
    )
}
export default UpdateButton;