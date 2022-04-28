import AppBarMui from '@mui/material/AppBar'
import styled from "@emotion/styled"

const AppBar = styled(AppBarMui)`

`

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
        <Title>Magnolia Grove Creations</Title>
      </Toolbar>
      <NavBar>
        <div>Home</div>
        <div>Products</div>
        <div>Collections</div>
        <div>About Us</div>
      </NavBar>
    </AppBar>
  </>)
}

export default MenuBar
