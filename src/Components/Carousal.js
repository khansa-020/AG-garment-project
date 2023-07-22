import Carousel from 'react-bootstrap/Carousel';
import './Carousal.css'
import myimage from '../Images/Cover 1.png';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.limelight.pk/cdn/shop/files/Desktop-Banner-1920-X-600-eid-RTW_fae92639-bfbc-4bcc-9d7f-5f8475529487.jpg?v=1688363415"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={myimage}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.limelight.pk/cdn/shop/files/Desktop-Banner-1920-X-600-eid-Men_360f175a-e2fb-4378-afd7-947472e7044a.jpg?v=1688364190"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;