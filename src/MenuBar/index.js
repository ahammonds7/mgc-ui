import AppBarMui from '@mui/material/AppBar'
import styled from "@emotion/styled"
import CleanLink from '../common/CleanLink'
import { route as homeRoute } from '../Home'
import { route as productsRoute } from '../Products'
import { route as ourMissionRoute } from '../OurMission'
import { route as candleCareRoute } from '../CandleCare'
import { route as miscRoute } from '../Misc'
import {squareUrl, redirectProducts} from "../config";
import CleanLinkExternal from "../common/CleanLinkExternal";

const AppBar = styled(AppBarMui)`
max-width: 100%;
`

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
  gap: 20px;
  padding-bottom: 20px;
  flex-wrap: nowrap;
  white-space: nowrap;
  overflow-x: auto;
`

const NavLinkItem = styled(CleanLink)`
  font-family: LexendMegaRegular, sans-serif;
  text-transform: uppercase;
  font-size: .9em;
`
const NavLinkItemExternal = styled(CleanLinkExternal)`
  font-family: LexendMegaRegular, sans-serif;
  text-transform: uppercase;
  font-size: .9em;
`
const NavLinkItemFirst = styled(NavLinkItem)`
  margin-left: auto;
  padding-left: 10px;
`
const NavLinkItemLast = styled(NavLinkItem)`
  margin-right: auto;
  padding-right: 10px;
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
        <NavLinkItemFirst to={homeRoute}>Home</NavLinkItemFirst>
        {redirectProducts ?
          <NavLinkItemExternal href={`${squareUrl}/s/shop`} target="_blank" rel="noreferrer" >Products</NavLinkItemExternal>
          :
          <NavLinkItem to={productsRoute}>Products</NavLinkItem>
        }
        <NavLinkItem to={ourMissionRoute}>Our&nbsp;Mission</NavLinkItem>
        <NavLinkItem to={candleCareRoute}>Candle&nbsp;Care</NavLinkItem>
        <NavLinkItemLast to={miscRoute}>Misc.</NavLinkItemLast>
      </NavBar>
    </AppBar>
  </>)
}

export default MenuBar
