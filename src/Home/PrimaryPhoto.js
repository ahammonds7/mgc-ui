import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import firstImage from './slider-images/top/1-all-products.jpg'
import secondImage from './slider-images/top/2-signature-candle.jpg'
import thirdImage from './slider-images/top/3-more-products.jpg'
import fourthImage from './slider-images/top/4-wax-melts.jpg'

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
      <div>
        <img src={firstImage}  alt=''/>
      </div>
      <div>
        <img src={secondImage}  alt=''/>
      </div>
      <div>
        <img src={thirdImage}  alt=''/>
      </div>
      <div>
        <img src={fourthImage}  alt=''/>
      </div>
    </Carousel>
  </>);
}

export default PrimaryPhoto
