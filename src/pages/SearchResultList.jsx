import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap';

import CommonSection from './../shared/CommonSection.jsx'
import { useLocation } from 'react-router-dom';
import TourCard from './../shared/TourCard.jsx';
import NewsLetter from './../shared/Newsletter.jsx';

const SearchResultList = () => {

  const location = useLocation();

  const [data] = useState(location.state);

  console.log(data);

  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {
              data.length === 0 ? 
                <h4 className='text-center'>No Tour Found!!!</h4> : 
              data?.map(tour =>
               <Col lg='3' className='mb-4' key={tour._id}> 
                  <TourCard tour={tour} />
               </Col> 
              )
            }
          </Row>
        </Container>
      </section>

      <NewsLetter/>
    </>
  )
}

export default SearchResultList