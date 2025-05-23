import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MySlider from "../Components/Home/MySlider";
import { Card } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <MySlider />
      <Container>
        <Row>
          <Col sm={8} className="border">
            <div className="d-flex justify-content-ceneter gap-2">
              <div className="w-50">
                <div>
                  <img
                    src="https://www.nykaafashion.com/style-files/wp-content/uploads/2023/08/10-Types-Of-Earrings-To-Add-To-Your-Jewellery-Box-Banner.jpg"
                    className="w-50"
                    alt
                  />
                </div>
                <div>
                  <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  </h4>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4} className="border">
            sm=4
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
