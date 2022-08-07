import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import firstImage from './slider-images/top/1-fall-scents.jpeg'
import secondImage from './slider-images/top/2-fall-christmas-scents.jpeg'
import thirdImage from './slider-images/top/3-all-products.jpg'
import fourthImage from './slider-images/top/4-signature-candle.jpg'
import fifthImage from './slider-images/top/5-more-products.jpg'
import sixthImage from './slider-images/top/6-wax-melts.jpg'

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
      <div>
        <img src={fifthImage}  alt=''/>
      </div>
      <div>
        <img src={sixthImage}  alt=''/>
      </div>
    </Carousel>
  </>);
}

export default PrimaryPhoto
