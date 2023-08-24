import React from 'react'
import './newsletter.css';
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe to be travel ready!!!</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder='Enter your email' />
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>

                        <p>
                            Stay in the loop and never miss out on the latest travel inspirations, 
                            exclusive deals, and exciting destinations. Subscribe to our newsletter 
                            to receive regular updates directly in your inbox. Let your wanderlust be 
                            fueled by our handpicked travel tips and stories from around the world.
                        </p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter