import { Routes, Route } from 'react-router-dom'
import Home, { route as homeRoute } from "../Home";
import Products, { route as productsRoute } from "../Products";
import Product, { route as productRoute } from "../Product";
import OurMission, { route as ourMissionRoute } from "../OurMission";
import CandleCare, { route as candleCareRoute } from "../CandleCare";
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
        <Route path={productRoute} element={<Product/>} />
        <Route path={ourMissionRoute} element={<OurMission/>} />
        <Route path={candleCareRoute} element={<CandleCare/>} />
      </Routes>
    </RoutesContainer>
    <SiteInfo />
  </Container>)
}

export default Content
