import styled from '@emotion/styled'
import { colors } from "../config";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  width: 100%;
  margin-top: 15px;
`
const Category = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${colors.primaryLight};
  padding: 15px;
  min-width: 200px;
  font-size: 1em;
  font-family: LexendMegaRegular, sans-serif;
  text-transform: uppercase;
`

const Categories = () => {
  return (<>
    <Container>
      <Category>
        Candles
      </Category>
    </Container>
    <Container>
      <Category>
        Wax Melts
      </Category>
      <Category>
        Room/Linen Sprays
      </Category>
      <Category>
        Home Decor
      </Category>
    </Container>
  </>);
}

export default Categories
