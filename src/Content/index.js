import { Routes, Route } from 'react-router-dom'
import Home, { route as homeRoute } from "../Home";
import Products, { route as productsRoute } from "../Products";
import AboutUs , { route as aboutUsRoute } from "../AboutUs";

const Content = () => {
  return (<>
    <Routes>
      <Route path={homeRoute} element={<Home/>} />
      <Route path={productsRoute} element={<Products/>} />
      <Route path={aboutUsRoute} element={<AboutUs/>} />
    </Routes>
  </>)
}

export default Content
