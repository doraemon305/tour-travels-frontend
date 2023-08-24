import React from 'react'
import ServiceCard from './ServiceCard';
import { Col} from "reactstrap"; 
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Forecasting Your Journey with Weather Insights",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Guiding Your Way to Unforgettable Memories",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Crafting Journeys Tailored to Your Needs",
    },
];

const ServiceList = () => {
  return (
    <>
       {
            servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
                <ServiceCard item={item}/>
            </Col>
            ))
       }
    </>
  )
}

export default ServiceList