import React from 'react'
import Slider from 'react-slick';
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";


const Testimonial = () => {

    const settings= {
        dots:true,
        infinite:true,
        autoplay:true,
        speed: 1000,
        swipeToSlide:true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true, 
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                },
            },
        ]
    }
  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>
                An incredible journey that left us speechless. The guides, the sights, and the experience 
                exceeded all expectations. A must-do for every adventurer.
            </p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Raj Aayush</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Our dream vacation turned reality. Impeccable planning, breathtaking sights, and seamless 
                logistics. We're already planning our next getaway!
            </p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Neha Jha</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                A journey we'll treasure forever. Each day brought new wonders, local insights, and heartfelt
                connections. An experience that touched our souls.
            </p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Nicky Men</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
                An incredible journey that left us speechless. The guides, the sights, and the experience 
                exceeded all expectations. A must-do for every adventurer.
            </p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Raj Aayush</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Our dream vacation turned reality. Impeccable planning, breathtaking sights, and seamless 
                logistics. We're already planning our next getaway!
            </p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Neha Jha</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                A journey we'll treasure forever. Each day brought new wonders, local insights, and heartfelt
                connections. An experience that touched our souls.
            </p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Nicky Men</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonial