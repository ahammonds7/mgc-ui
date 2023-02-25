import { Routes, Route } from 'react-router-dom'
import Home, { route as homeRoute } from "../Home";
import Products, { route as productsRoute } from "../Products";
import Product, { route as productRoute } from "../Product";
import OurMission, { route as ourMissionRoute } from "../OurMission";
import CandleBar, { route as candleBarRoute } from "../CandleBar";
import CandleCare, { route as candleCareRoute } from "../CandleCare";
import Misc, { route as miscRoute } from "../Misc";
import styled from "@emotion/styled";
import SiteInfo from "../Home/SiteInfo";
import {redirectProducts} from "../config";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RoutesContainer = styled.div`
  min-height: Calc(100vh - 223px);
`

const Content = () => {
  return (<Container>
    <RoutesContainer>
      <Routes>
        <Route path={homeRoute} element={<Home/>} />
        { !redirectProducts &&
          <>
          <Route path={productsRoute} element={<Products/>} />
          <Route path={productRoute} element={<Product/>} />
          </>
        }
        <Route path={ourMissionRoute} element={<OurMission/>} />
        <Route path={candleBarRoute} element={<CandleBar/>} />
        <Route path={candleCareRoute} element={<CandleCare/>} />
        <Route path={miscRoute} element={<Misc/>} />
      </Routes>
    </RoutesContainer>
    <SiteInfo />
  </Container>)
}

export default Content
