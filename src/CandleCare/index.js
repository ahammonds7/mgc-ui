import styled from '@emotion/styled'
import Main from "../common/Main"
import timeForMeltingImage from './images/time-for-melting.png'
import maxTimeImage from './images/max-time.png'
import trimWickImage from './images/trim-wick.png'
import watchImage from './images/watch.png'
import stableSurfaceImage from './images/stable-surface.png'
import noPetsOrKidsImage from './images/no-pets-or-kids.png'

const Title = styled.h1`
  font-size: 10em;
  font-family: LeagueGothic, sans-serif;
  letter-spacing: 8px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 0;
  line-height: 1em;
  color: #DCBCAD;
  @media (max-width: 374px) {
    font-size: 3em;
  }
  @media (min-width: 375px) and (max-width: 450px) {
    font-size: 5em;
  }
`
const OverlayTitle = styled.h2`
  font-size: 3em;
  margin-top: 0;
  font-family: AmalfiCoast, sans-serif;
  text-align: center;
  line-height: 0;
  position: relative;
  left: 100px;
  @media (max-width: 374px) {
    left: 0;
    line-height: 1em;
    font-size: 1.8em
  }
  @media (min-width: 375px) and (max-width: 450px) {
    left: 0;
    line-height: 1em;
    font-size: 2.5em;
  }

`
const ImageBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`
const SafetyImage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  font-family: JosefinSans-Regular, sans-serif;
  font-size: 1.2em;
  max-width: 500px;
`
const Image = styled.img`
  display: flex;
  max-width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
`

const CandleCare = () => {
  return (<>
    <Main>
      <Title>Candle Care</Title>
      <OverlayTitle>instructions</OverlayTitle>
      <ImageBox>
        <SafetyImage>
          <Image src={timeForMeltingImage} alt={'Safety Image'} />
          To prevent “tunneling" allow enough time for the wax to melt completely to the edges of the container
        </SafetyImage>
        <SafetyImage>
          <Image src={maxTimeImage} alt={'Safety Image'} />
          Avoid burning the candle for more than 3 or 4 hours at a time
        </SafetyImage>
        <SafetyImage>
          <Image src={trimWickImage} alt={'Safety Image'} />
          Trim the wick to 1/4 inch before each use
        </SafetyImage>
        <SafetyImage>
          <Image src={watchImage} alt={'Safety Image'} />
          Keep an eye on your candle - Never leave a burning candle unattended
        </SafetyImage>
        <SafetyImage>
          <Image src={stableSurfaceImage} alt={'Safety Image'} />
          Place candle on a stable surface away from flammable objects before lighting
        </SafetyImage>
        <SafetyImage>
          <Image src={noPetsOrKidsImage} alt={'Safety Image'} />
          Keep burning candles away from pets and children
        </SafetyImage>
      </ImageBox>
    </Main>
  </>)
}

export const route = '/candle-care'

export default CandleCare
