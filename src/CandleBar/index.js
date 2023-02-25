import styled from '@emotion/styled'
import Main from "../common/Main"
import candleBarTitleImage from './candle-bar-title.png'
import { contact } from '../config'

const Title = styled.h1`
  font-family: AltaRegular, sans-serif;
  text-align: center;
  width: Calc(100vw - 50px);
  @media (min-width: 450px) {
    margin: 0;
   text-shadow: 0 0 10px rgba(0, 0, 0, .4);
   color: white;
   background-image: url(${candleBarTitleImage});
   line-height: 300px;
   font-size: 100px;
  }
  //@media (max-width: 450px) {
  //  line-height: 50px;
  //  font-size: 50px;
  //}
`
const SubTitle = styled.h3`
  font-family: LexendMegaRegular, sans-serif;
  text-transform: uppercase;
`
const Caption = styled.div`
  max-width: 800px;
  line-height: 1.8em;
  text-align: center;
`

const CandleBar = () => {
  return (<>
    <Main>
      <Title>Candle Bar</Title>
      <Caption>
        <p>Candle parties can be a great way to socialize and spend time with friends while engaging in a fun and creative activity. If you are interested in candles and enjoy spending time with friends, then a candle party will be a great experience for you!</p>
        <SubTitle>Make your own candle!</SubTitle>
        <p>Choose your own vessel</p>
        <p><strong>AND</strong></p>
        <p>Mix <strong>YOUR OWN</strong> custom scent</p>
        <SubTitle>The Details</SubTitle>
        <ul>
          <li>Prices start at $35 per person</li>
          <li>Parties of 6-10 people at a time</li>
          <li>Each pouring cession lasts approx. 45min</li>
          <li><a href={`tel:${contact.phone}`}>Call</a>, <a href={`sms:${contact.phone}`}>Text</a> or <a href={`mailto:${contact.email}`}>Email</a> today for an appointment!</li>
        </ul>
        <small>*Ages 12 and up only (no&nbsp;children&nbsp;under&nbsp;5&nbsp;allowed&nbsp;in&nbsp;Studio)</small>
      </Caption>
    </Main>
  </>)
}

export const route = '/candle-bar'

export default CandleBar
