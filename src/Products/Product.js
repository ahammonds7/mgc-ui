import {Link} from "react-router-dom";
import styled from "@emotion/styled";

const Title = styled.h2`

`

const Product = ({name, scents, productCode}) => {
  return <>
    <Title>{name}</Title>
    <p>{scents}</p>
    <Link to={`/product/${productCode}`}>View Product</Link>
  </>
}

export default Product
