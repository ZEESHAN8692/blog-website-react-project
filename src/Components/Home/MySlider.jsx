import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import base_url from "../../../Api/Base_Url";
import { slider_end } from "../../../Api/End_Point";
import Carousel from "react-bootstrap/Carousel";

const MySlider = () => {
  const apiUrl = base_url + slider_end;
  const [mySlider, setMySlider] = useState([]);
  const getSlider = () => {
    axios
      .get(apiUrl)
      .then((res) => {
        setMySlider(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSlider();
  }, []);

  return (
    <>
      <Container>
        <Carousel data-bs-theme="dark">
          {mySlider?.map((slide) => (
            <Carousel.Item key={slide.id}>
              <img className="d-block w-100" src={slide.image} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default MySlider;
