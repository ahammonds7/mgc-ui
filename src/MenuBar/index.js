import AppBarMui from '@mui/material/AppBar'
import styled from "@emotion/styled"
import CleanLink from '../common/CleanLink'
import { route as homeRoute } from '../Home'
import { route as productsRoute } from '../Products'
import { route as aboutUsRoute } from '../AboutUs'

const AppBar = styled(AppBarMui)``

const Toolbar = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  color: black;
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
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding-bottom: 20px;
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
        <CleanLink to={homeRoute}>Home</CleanLink>
        <CleanLink to={productsRoute}>Products</CleanLink>
        <CleanLink to={aboutUsRoute}>About Us</CleanLink>
      </NavBar>
    </AppBar>
  </>)
}

export default MenuBar
