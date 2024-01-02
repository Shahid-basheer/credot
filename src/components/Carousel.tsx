import React from "react";
import { Container } from "react-bootstrap";
import Category from "./Category";

const Carousel: React.FC = () => {
  return (
    <Container>
      <div
        id="carouselExampleControls"
        className="carousel slide orange-bg mb-5"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h1>X-Box for your living room</h1>
                <p>
                  This is the best x-box in the world for people who just want
                  to waste time in front of fake sports.
                </p>
                <h1 className="price">$600</h1>
                <button className="buy-now-button">Buy Now</button>
              </div>
              <div className="col-md-5">
                <img
                  src="https://arif77502.github.io/panda-commerce/images/panda-commerce/banner-images/xbox.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Category />
    </Container>
  );
};

export default Carousel;
