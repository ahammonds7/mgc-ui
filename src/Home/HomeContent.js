import styled from '@emotion/styled'
import {colors} from "../config";

import footerImg from './magnolia-footer.png'
import bowlImg from './slider-images/bottom/bowl.jpg'
import topCandleImg from './slider-images/bottom/top-candle.jpg'
import allProductsImg from './slider-images/bottom/all-products.jpg'

const SubTitle = styled.h3`
  font-family: LexendMegaRegular, sans-serif;
  text-transform: uppercase;
`
const Caption = styled.div`
  text-align: center;
  line-height: 1.8em;
  background-color: ${colors.shadowLight};
  margin-top: 15px;
  padding: 8px 15px;
`
const Image = styled.img`
  margin-top: 15px;
  margin-bottom: 8px;
  width: Calc(33% - 10px);
`
const Images = styled.div`
  background-color: ${colors.primaryLight};
  margin-top: 15px;
  margin-bottom: -15px;
  display: flex;
  justify-content: center;
  padding: 0 15px 5px;
  gap: 15px;
  width: 100%;
  @media (max-width: 450px) {
    display: none;
  }
`

const HomeContent = () => {
  return (<>
    <Image src={footerImg} />
    <Caption>
      <SubTitle>Mission Statement</SubTitle>
      <p>To inspire, enhance and enrich the lives of our customers by providing hand poured, richly scented, luxury home fragrances and beautiful handmade home goods.</p>
    </Caption>
    <Image src={footerImg} />
    <Images>
      <Image src={bowlImg} />
      <Image src={topCandleImg} />
      <Image src={allProductsImg} />
    </Images>
  </>);
}

export default HomeContent
