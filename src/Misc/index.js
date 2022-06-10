import styled from '@emotion/styled'
import Main from "../common/Main";

const Title = styled.h1`
  font-family: AltaRegular, sans-serif;
  text-align: center;
`
const Caption = styled.div`
  text-align: center;
  max-width: 800px;
  line-height: 1.8em;
`

const Misc = () => {
  return (<>
    <Main>
      <Title>Refunds + Exchanges</Title>
      <Caption>
        <p>At Magnolia Grove Creations,LLC, all of our products are carefully inspected before they are shipped. Due to the nature of our products, used candles and handmade products cannot be returned or refunded. However, we will replace or refund products damaged during shipment if photographic proof of damage is submitted to us within 7 days of delivery.</p>
        <p>You may return your unused candles or wax melts within 14 days of purchase. The buyer is responsible for shipping cost on all return items.  We do not do exchanges at this time. All sales are final on Room Sprays and handmade decor items.</p>
        <p>In the event the package is damaged during shipping you may return your unused candle(s) for a full refund of your purchase price, less shipping and handling within 14 days of delivery. Please contact us at <a href={'mailto:magnoliagrovecreations123@gmail.com'}>magnoliagrovecreations123@gmail.com</a> for further details.</p>
      </Caption>
    </Main>
  </>)
}

export const route = '/misc'

export default Misc
