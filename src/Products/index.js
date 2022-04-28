import styled from '@emotion/styled'
import Main from "../common/Main";

const Title = styled.h1`
  font-family: AltaRegular, sans-serif;
`
const Caption = styled.p`
  text-align: center;
`

const Products = () => {
  return (<>
    <Main>
      <Title>Welcome!</Title>
      <Caption>This will be the product page!</Caption>
    </Main>
  </>)
}

export const route = '/products'

export default Products
