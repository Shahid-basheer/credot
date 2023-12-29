import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { CartContext } from "../context/cart";

const Category = () => {
  const { setCart } = useContext(CartContext);
  function buyNow() {
    setCart((pre) => pre + 1);
  }
  return (
    <div>
      <Container className="categories">
        <Row>
          <Col>
            <div className="d-flex justify-content-between align-items-center cat1">
              <h1>Watch</h1>
              <img
                src="http://127.0.0.1:5500/images/categories/watch.png"
                alt=""
              />
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-between align-items-center cat2">
              <h1>Bag</h1>
              <img
                src="http://127.0.0.1:5500/images/categories/bag.png"
                alt=""
              />
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-between align-items-center cat3">
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
          <Col>
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
          <Col>
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
          <Col>
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
          <Col>
            <div class="card" style={{ height: "35rem" }}>
              <img
                src="https://arif77502.github.io/panda-commerce/images/panda-commerce/bags/bag-1.png"
                className="card-img-top"
                style={{ width: "20rem" }}
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Reebok Dart Men’s Shoes</h5>
                <h5>$120</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                <button class="buy-now-button" onClick={buyNow}>
                  Buy Now
                </button>
              </div>
            </div>
          </Col>
          <Col>
            <div class="card" style={{ height: "35rem" }}>
              <img
                src="https://arif77502.github.io/panda-commerce/images/panda-commerce/bags/bag-3.png"
                style={{ width: "20rem" }}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Reebok Pump</h5>
                <h5>$320</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div class="card-footer">
                <button class="buy-now-button" onClick={buyNow}>
                  Buy Now
                </button>
              </div>
            </div>
          </Col>
          <Col>
            <div class="card" style={{ height: "35rem" }}>
              <img
                src="https://arif77502.github.io/panda-commerce/images/panda-commerce/bags/bag-3.png"
                class="card-img-top"
                style={{ width: "20rem" }}
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Reebok All Terrain</h5>
                <h5>$169</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div class="card-footer">
                <button class="buy-now-button" onClick={buyNow}>
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
