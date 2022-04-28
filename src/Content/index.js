import styled from '@emotion/styled'

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: Calc(100vh - 148px);
  flex-direction: column;
  padding: 15px;
  max-width: 100%;
`
const Title = styled.h1`
  font-family: AltaRegular, sans-serif;
`
const Caption = styled.p`
  text-align: center;
`

const Content = () => {
  return (<>
    <Main>
      <Title>Welcome!</Title>
      <Caption>We are excited to be sharing some awesome products soon!</Caption>
    </Main>
  </>)
}

export default Content
