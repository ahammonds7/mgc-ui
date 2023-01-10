import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import allProducts from './slider-images/top/all-products.jpg'
import signatureCandles from './slider-images/top/signature-candle.jpg'
import moreProducts from './slider-images/top/more-products.jpg'
import waxMelts from './slider-images/top/wax-melts.jpg'

const carouselSettings = {
  showThumbs: false,
  autoPlay: true,
  infiniteLoop: true,
  interval: 4000,
  showStatus: false,
  stopOnHover: false
}

const PrimaryPhoto = () => {
  return (<>
    <Carousel {...carouselSettings}>
      {
        [
          allProducts,
          signatureCandles,
          moreProducts,
          waxMelts,
        ]
        .map(image => (
          <div>
            <img src={image}  alt=''/>
          </div>
        ))
      }
    </Carousel>
  </>);
}

export default PrimaryPhoto
