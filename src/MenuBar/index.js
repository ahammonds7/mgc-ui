import AppBarMui from '@mui/material/AppBar'
import styled from "@emotion/styled"
import CleanLink from '../common/CleanLink'
import { route as homeRoute } from '../Home'
import { route as productsRoute } from '../Products'
import { route as ourMissionRoute } from '../OurMission'
import { route as candleCareRoute } from '../CandleCare'

const AppBar = styled(AppBarMui)``

const Toolbar = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  font-family: AltaRegular, serif;
  @media (max-width: 374px) {
    font-size: 1.3em;
  }
  @media (min-width: 375px) and (max-width: 450px) {
    font-size: 1.5em;
  }
`
const NavBar = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding-bottom: 20px;
`

const NavLinkItems = styled(CleanLink)`
  font-family: LexendMegaRegular, sans-serif;
  text-transform: uppercase;
  font-size: .9em;
`

const MenuBar = () => {
  return (<>
    <AppBar position={'static'}>
      <Toolbar>
        <CleanLink to={homeRoute}>
          <Title>Magnolia Grove Creations</Title>
        </CleanLink>
      </Toolbar>
      <NavBar>
        <NavLinkItems to={homeRoute}>Home</NavLinkItems>
        <NavLinkItems to={productsRoute}>Products</NavLinkItems>
        <NavLinkItems to={ourMissionRoute}>Our Mission</NavLinkItems>
        <NavLinkItems to={candleCareRoute}>Candle Care</NavLinkItems>
      </NavBar>
    </AppBar>
  </>)
}

export default MenuBar
