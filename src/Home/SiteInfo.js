import styled from '@emotion/styled'
import {colors} from "../config";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  width: 100%;
  margin-top: 15px;
  background-color: ${colors.dark};
  color: ${colors.light};
`

const Copyright = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  width: 100%;
  font-size: .8em;
  text-align: center;
`

const currentYear = (new Date()).getFullYear()

const SiteInfo = () => {
  return (<>
    <Container>
      <Copyright>
        Copyright &copy; {currentYear} Magnolia Grove Creations, LLC. All Rights Reserved
      </Copyright>
    </Container>
  </>);
}

export default SiteInfo
