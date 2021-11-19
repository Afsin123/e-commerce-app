import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="https://www.thespruceeats.com/thmb/NRllXVX3m3JP4bCWxw0Ltpayhfg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg" alt="" />
      </Wrap>
      <Wrap>
         <img src="https://www.thespruceeats.com/thmb/NRllXVX3m3JP4bCWxw0Ltpayhfg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg" alt="" /> 
      </Wrap>
      <Wrap>
        <img src="https://www.thespruceeats.com/thmb/NRllXVX3m3JP4bCWxw0Ltpayhfg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg" alt="" /> 
      </Wrap>

      <Wrap>
       <img src="https://www.thespruceeats.com/thmb/NRllXVX3m3JP4bCWxw0Ltpayhfg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg" alt="" /> 
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
margin-top: 20px;

ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }

li.slick-active button:before {
    color: white;
  }

.slick-list {
    overflow:visible;
}
button{
    z-index:1;
}

}
`;
const Wrap = styled.div`
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;