import React from 'react'
import '../styles/home.css';
import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from './../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import experienceImg from '../assets/images/experience.png';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';

const Home = () => {

  return (
  <>
      {/* Hero Section Start */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                  <div className="hero__subtitle d-flex align-items-center">
                    <Subtitle subtitle={'Know Before You Go'}/>
                    <img src={worldImg} alt=""/>
                  </div>
                  <h1>
                    Travelling opens the door to creating{" "}
                    <span className="highlight"> memories </span>
                  </h1>
                  <p>
                    Welcome to our Travel and Tour website, your passport to discovery and excitement. 
                    Explore our curated itineraries, expert tips, and destination guides, as we turn 
                    your travel dreams into reality. Let's embark on your next adventure together!
                  </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt=""/>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls/>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt=""/>
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
            {/* Hero Section End */}
      <section>
        <Container>
          <Row>
            <Col lg='3' >
                <h5 className="services__subtitle">What we serve</h5>
                <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

        {/* Featured Tour Section Start */}
        <section>
          <Container>
            <Row>
              <Col lg='12' className='mb-5'>
                <Subtitle subtitle={"Explore"} />
                <h2 className="featured__tour-title">Our Featured Tours</h2>
              </Col>
              <FeaturedTourList />
            </Row>
          </Container>

        </section>

        {/* Featured Tour Section End */}

        {/* Experience Section Start */}
          <Container>
            <Row>
              <Col lg='6'>
                <div className="experience__content">
                  <Subtitle subtitle={'Experience'}/>
                  <h2>With our all experience <br/> we will serve you</h2>
                  <p>
                    Immerse yourself in unique travel experiences that capture the essence of each destination. 
                    From thrilling adventures to serene getaways, our curated experiences offer something for every
                    traveler.Uncover the heart and soul of each place you visit, creating memories that will stay 
                    with you long after your journey ends. 
                  </p>
                </div>

                <div className="counter__wrapper d-flex align-items-center gap-5">
                  <div className="counter__box">
                    <span>12k+</span>
                    <h6>Successful Trip</h6>
                  </div>
                  <div className="counter__box">
                    <span>2k+</span>
                    <h6>Regular Clients</h6>
                  </div>
                  <div className="counter__box">
                    <span>15</span>
                    <h6>Years Experience</h6>
                  </div>
                </div>
              </Col>

              <Col lg='6'>
                <div className="experience__img">
                  <img src={experienceImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        {/* Experience Section End */}

        {/* Gallery Section Start */}

        <section>
          <Container>
            <Row>
              <Col lg='12'>
               <Subtitle subtitle={'Gallery'} />
               <h2 className='gallery__title'>
                 Visit our customers tour gallery
               </h2>
              </Col>
              <Col lg='12'>
                <MasonryImagesGallery />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Gallery Section End */}

        {/* Testimonial Section Start */}
          <section>
            <Container>
              <Row>
                <Col lg='12'>
                  <Subtitle subtitle={'Fans Love'}/>
                  <h2 className="testimonial__title">What our fans say about us!!!</h2>
                </Col>
                <Col lg='12'>
                 <Testimonial />
                </Col>
              </Row>
            </Container>
          </section>

        {/* Testimonial Section End */}

        <Newsletter />

      </>
  );
}

export default Home