import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { route as candleBarRoute } from '../CandleBar/index';
import { useNavigate } from 'react-router-dom'
import imgOnClickNavigate from './img-on-click-navigate'

import allProducts from './slider-images/top/all-products.jpg'
import signatureCandles from './slider-images/top/signature-candle.jpg'
import moreProducts from './slider-images/top/more-products.jpg'
import waxMelts from './slider-images/top/wax-melts.jpg'
import candleBar from './slider-images/top/candle-bar.png'

const carouselSettings = {
  showThumbs: false,
  autoPlay: false,
  infiniteLoop: true,
  interval: 4000,
  showStatus: false,
  stopOnHover: false,
  onClickItem: imgOnClickNavigate
}

const images = [
  { image: candleBar, link: candleBarRoute },
  { image: allProducts },
  { image: signatureCandles },
  { image: moreProducts },
  { image: waxMelts },
]

const PrimaryPhoto = () => {
  const navigate = useNavigate()
  return (<>
    <Carousel {...carouselSettings}>
      {
        images
        .map(({ image, link }) => (
          <div {...{ navigate, link }}>
            <img src={image} alt=''/>
          </div>
        ))
      }
    </Carousel>
  </>);
}

export default PrimaryPhoto
