import { Routes, Route } from 'react-router-dom'
import Home, { route as homeRoute } from "../Home";
import Products, { route as productsRoute } from "../Products";
import AboutUs, { route as aboutUsRoute } from "../AboutUs";
import Calculations, { route as calculationsRoute } from "../Calculations";
import styled from "@emotion/styled";
import SiteInfo from "../Home/SiteInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RoutesContainer = styled.div`
  min-height: Calc(100vh - 165px);
`

const Content = () => {
  return (<Container>
    <RoutesContainer>
      <Routes>
        <Route path={homeRoute} element={<Home/>} />
        <Route path={productsRoute} element={<Products/>} />
        <Route path={aboutUsRoute} element={<AboutUs/>} />
        <Route path={calculationsRoute} element={<Calculations/>} />
      </Routes>
    </RoutesContainer>
    <SiteInfo />
  </Container>)
}

export default Content
