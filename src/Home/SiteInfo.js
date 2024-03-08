import styled from '@emotion/styled'
import { colors } from "../config";
import SocialMediaLinks from "./SocialMediaLinks";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  width: 100%;
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
      <SocialMediaLinks />
      <Copyright>
        Copyright &copy; {currentYear} Magnolia Grove Collections, LLC. All Rights Reserved
      </Copyright>
    </Container>
  </>);
}

export default SiteInfo
