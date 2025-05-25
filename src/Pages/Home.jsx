import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MySlider from "../Components/Home/MySlider";
import LatestPost from "../Components/Home/LatestPost";
import { Link } from "react-router-dom";
import FullPagePost from "../Components/Home/FullPagePost";
import axios from "axios";
import base_url from "../../Api/Base_Url";
import { blog_end } from "../../Api/End_Point";
import LatestPostDiv from "../Components/Home/LatestPostDiv";

const Home = () => {
  const [data, setData] = useState([]);
  const apiUrl = base_url + blog_end;
  const getBlogData = () => {
    axios
      .get(apiUrl)
      .then((res) => {
        const reverseData = res.data.reverse();
        setData(reverseData);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getBlogData();
  }, [setData]);
  return (
    <>
      <MySlider />
      <br />
      <br />
      <Container>
        <Row>
          <Col sm={8} className="border pt-2">
            <div className="row gap-3">
              {data?.map((blog) => {
                let { id, title, description, mainImage, date } = blog;
                return (
                  <div
                    className="shadow-sm p-2"
                    style={{ width: "48%" }}
                    key={id}
                  >
                    <Link to={`/single-post/${id}`}>
                      <img src={mainImage} className="card-img-top" alt="..." />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title pt-2">{title.slice(0, 60)}</h5>
                      <p className="card-text">{description.slice(0, 100)}</p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last updated {date}
                        </small>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>

          <Col sm={4} className="border">
            <LatestPost />
            <LatestPostDiv />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <FullPagePost />
    </>
  );
};

export default Home;
