import styled from '@emotion/styled'
import Main from "../common/Main";

const Title = styled.h1`
  font-family: AltaRegular, sans-serif;
`
const Caption = styled.p`
  text-align: center;
`

const AboutUs = () => {
  return (<>
    <Main>
      <Title>Welcome!</Title>
      <Caption>This will be the About Us page!</Caption>
    </Main>
  </>)
}

export const route = '/about-us'

export default AboutUs
