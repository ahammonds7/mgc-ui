import styled from '@emotion/styled'
import Main from "../common/Main";
import data from '../products-data.json'
import Product from "./Product";

const Title = styled.h1`
  font-family: AltaRegular, sans-serif;
`

const Products = () => {
  return (<>
    <Main>
      <Title>Welcome!</Title>
      { data.products.map(props => <Product {...props} />) }
    </Main>
  </>)
}

export const route = '/products'

export default Products
