import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import type { RootState } from "../redux/cart/store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
const Category: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  function buyNow() {
    dispatch(addToCart({ name: "" }));
  }

  return (
    <div>
      <Container className="categories">
        <Row>
          <Col>
            <div className="m-3 d-flex justify-content-between align-items-center cat1">
              <h1>Watch</h1>
              <img
                src="https://arif77502.github.io/panda-commerce/images/panda-commerce/categories/watch.png"
                alt=""
              />
            </div>
          </Col>
          <Col>
            <div className="m-3 d-flex justify-content-between align-items-center cat2">
              <h1>Bag</h1>
              <img
                src="https://arif77502.github.io/panda-commerce/images/panda-commerce/categories/bag.png"
                alt=""
              />
            </div>
          </Col>
          <Col>
            <div className="m-3 d-flex justify-content-between align-items-center cat3">
              <h1>Shoes</h1>
              <img
                src="https://arif77502.github.io/panda-commerce/images/panda-commerce/categories/shoes.png"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="shoes" id="shoes">
        <h3>Shoes</h3>
        <Row>
          <Col sm={12} md={4} className="mb-3">
            <Card>
              <img
                src="https://arif77502.github.io/panda-commerce/images/panda-commerce/shoes/shoe-1.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Supply 350</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional.
                </p>
                <h5>$120</h5>
                <button className="buy-now-button" onClick={buyNow}>
                  Buy Now
                </button>
              </div>
            </Card>
          </Col>
          <Col sm={12} md={4} className="mb-3">
            <Card>
              <img
                src="https://arif77502.github.io/panda-commerce/images/panda-commerce/shoes/shoe-2.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Nike 360</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <h5>$320</h5>
                <button className="buy-now-button" onClick={buyNow}>
                  Buy Now
                </button>
              </div>
            </Card>
          </Col>
          <Col sm={12} md={4} className="mb-3">
            <Card>
              <img
                src="https://arif77502.github.io/panda-commerce/images/panda-commerce/shoes/shoe-3.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Red Airmax</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional.
                </p>
                <h5>$350</h5>
                <button className="buy-now-button" onClick={buyNow}>
                  Buy Now
                </button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container id="backpack">
        <h3>Backpack</h3>
        <Row>
          <Col className="mb-3">
            <div className="card" style={{ height: "35rem" }}>
              <img
                src="https://arif77502.github.io/panda-commerce/images/panda-commerce/bags/bag-1.png"
                className="card-img-top"
                style={{ width: "20rem" }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Reebok Dart Men’s Shoes</h5>
                <h5>$120</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer">
                <button className="buy-now-button" onClick={buyNow}>
                  Buy Now
                </button>
              </div>
            </div>
          </Col>
          <Col className="mb-3">
            <div className="card" style={{ height: "35rem" }}>
              <img
                src="https://arif77502.github.io/panda-commerce/images/panda-commerce/bags/bag-3.png"
                style={{ width: "20rem" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Reebok Pump</h5>
                <h5>$320</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer">
                <button className="buy-now-button" onClick={buyNow}>
                  Buy Now
                </button>
              </div>
            </div>
          </Col>
          <Col className="mb-3">
            <div className="card" style={{ height: "35rem" }}>
              <img
                src="https://arif77502.github.io/panda-commerce/images/panda-commerce/bags/bag-3.png"
                className="card-img-top"
                style={{ width: "20rem" }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Reebok All Terrain</h5>
                <h5>$169</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. content than the first to show
                  that equal height action.
                </p>
              </div>
              <div className="card-footer">
                <button className="buy-now-button" onClick={buyNow}>
                  Buy Now
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Category;
