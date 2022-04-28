import styled from '@emotion/styled'

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: Calc(100vh - 118px);
  flex-direction: column;
`
const Title = styled.h1`
  
`
const Caption = styled.p`
  
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
