import styled from '@emotion/styled'
import Main from "../common/Main";

const Title = styled.h1`
  font-family: AltaRegular, sans-serif;
  text-align: center;
`
const SubTitle = styled.h3`
  font-family: LexendMegaRegular, sans-serif;
  text-transform: uppercase;
`
const Caption = styled.div`
  text-align: center;
  max-width: 800px;
  line-height: 1.8em;
`

const OurMission = () => {
  return (<>
    <Main>
      <Title>Our Mission</Title>
      <Caption>
        <SubTitle>Mission Statement</SubTitle>
        <p>To inspire, enhance and enrich the lives of our customers by providing hand poured, richly scented, luxury home fragrances and beautiful handmade home goods.</p>
        <SubTitle>How We Began</SubTitle>
        <p>When you come from a family of crafters - you craft. When you love luxurious, beautiful, classy items, but live on a budget - you find ways to create the products you love and fulfill your bougie taste buds at the same time. Combine that with a uniquely blended family story, a team who has a unique set of gifts and talents, and you have the perfect combination for a family business!  Thus began <strong>"Magnolia Grove Collections, LLC"</strong>. We are a family centered, family run, team of professionals, each gifted with a skillset that allows us to bring you quality products and a business model that meets the highest of standards. We have big dreams, big goals, and the desire (and talent) to make it happen. Come along on this incredible journey with us. We're glad you're here.</p>
        <SubTitle>Our Commitment to Quality</SubTitle>
        <p>We are committed to bringing you quality products to enjoy throughout your home. Every item at Magnolia Grove Collections is handmade. We take great care with each product, using the best quality sourced materials available to us. We have taken a great deal of time testing products to ensure we are bringing you the very best. Each product goes thru a series of quality controls before it is listed on our website or at a pop-up show. That said, our items are handmade. We are not robots with computerized systems creating products. There are going to be minor inconsistencies and slight malformations. These are to be expected with any handmade items and we believe this gives them character. Every product has a story. Our hope is that you enjoy them as much as we do.</p>
        <SubTitle>Our Blessing Over the Candles</SubTitle>
        <p>Every single product to touch our store is handmade and personally prayed over by one of our staff (family) members. We are a family committed to Jesus...and prayer. Our hope is that every person or family who purchases a Magnolia Grove Collections Product, will experience the joy, peace and abundant love that God offers. Rest assured - we are praying for many blessings for you and your family!</p>
      </Caption>
    </Main>
  </>)
}

export const route = '/our-mission'

export default OurMission
