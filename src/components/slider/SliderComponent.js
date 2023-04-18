import React from 'react'

import { AnimationOnScroll } from 'react-animation-on-scroll';
import Slider from 'react-slick'

import slider1 from '../../images/slider-1.jpg'
import slider2 from '../../images/slider-2.jpg'
import slider3 from '../../images/slider-3.jpg'
import arrow from '../../images/arrow.svg'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'

function SliderComponent() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      ><img src={arrow} /></div>
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'green' }}
        onClick={onClick}
      ><img src={arrow} /></div>
    )
  }

  return (
    <div className="slider">
      <div className='container'>
        <div className="slider__wrapper">
          <AnimationOnScroll animateIn="animate__bounceIn">
            <h3 className="title slider__title">CHOOSE LOOKS</h3>
          </AnimationOnScroll>
          <Slider {...settings}>
            <img className="slider__img" src={slider2} alt="slider-img" />
            <img className="slider__img" src={slider1} alt="slider-img" />
            <img className="slider__img" src={slider2} alt="slider-img" />
            <img className="slider__img" src={slider3} alt="slider-img" />
            <img className="slider__img" src={slider1} alt="slider-img" />
          </Slider>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <h3 className="title slider__title">MORE ABOUT US</h3>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceInLeft">
            <p className="slider__text slider__text-top">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim sed libero commodo efficitur. Suspendisse et lorem ac neque dictum pellentesque nec sit amet nisl. Fusce rutrum quis purus ut pretium. Vivamus ornare mauris non ligula egestas, accumsan faucibus quam sollicitudin. Duis efficitur lorem tellus. Aliquam non rhoncus felis, porttitor consequat quam. Morbi gravida semper mattis. Nunc ultrices justo in pulvinar convallis. Curabitur dapibus ut tellus eu condimentum. Morbi vitae convallis purus, ac finibus ipsum.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__bounceInRight">
            <p className="slider__text">
              Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam pulvinar eget vitae nisl. In ligula neque, vestibulum vel arcu eu, eleifend vestibulum tortor. Duis facilisis, est et aliquam dapibus, urna mauris sagittis mi, et mattis metus magna vel tellus. Phasellus sit amet volutpat ante, ut condimentum lorem. Quisque auctor sollicitudin dui, vitae egestas nunc suscipit et. Nullam eu quam sem. Donec a nibh molestie, aliquam libero maximus, feugiat velit. Curabitur ac accumsan velit. In hac habitasse platea dictumst
            </p>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
}

export default SliderComponent
