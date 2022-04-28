import styled from '@emotion/styled'
import Main from "../common/Main";

const Title = styled.h1`
  font-family: AltaRegular, sans-serif;
`
const Caption = styled.p`
  text-align: center;
`

const Home = () => {
  return (<>
    <Main>
      <Title>Welcome!</Title>
      <Caption>We are excited to be sharing some awesome products soon!</Caption>
    </Main>
  </>)
}

export const route = '/'

export default Home
