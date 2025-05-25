import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import base_url from "../../Api/Base_Url";
import { blog_end } from "../../Api/End_Point";
import axios from "axios";
import { Col, Container, Image, Row } from "react-bootstrap";
import SimlarPost from "../Components/Home/SimlarPost";
import SimilarPostDiv from "../Components/Home/similarPostDiv";

const SinglePost = () => {
  const { id } = useParams();
  const apiUrl = base_url + blog_end + "/" + id;
  const [data, setData] = useState({});

  const getData = () => {
    axios.get(apiUrl).then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, [setData, id]);

  return (
    <>
      <br />
      <br />
      <Container>
        <Row className="">
          <Col sm={8} className="border p-2">
            <h1 className="text-center">{data.title}</h1>

            <div className="d-flex align-items-center gap-2">
              <span>
                <img src="/star.png" alt="" height={"23px"} />
              </span>
              <span>
                <img src="/star.png" alt="" height={"23px"} />
              </span>
              <span>
                <img src="/star.png" alt="" height={"23px"} />
              </span>
              <span>
                <img src="/star.png" alt="" height={"23px"} />
              </span>
              <span>
                <img src="/star.png" alt="" height={"23px"} />
              </span>
              <span>
                <b
                  className="text-body-secondary "
                  style={{ fontSize: "13px" }}
                >
                  3 REVIEWS / 5 AVERAGE
                </b>
              </span>
            </div>
            <br />
            <br />
            <div>
              <Image src={data.mainImage} fluid />
            </div>
            <br />
            <br />
            <h2 className="text-center">{data.heading1}</h2>
            <br />
            <p className="text-center">{data.description1}</p>
            <br />
            <div className="d-flex justify-content-center">
              <Image src={data.otherImage} rounded />
            </div>
            <br />
            <br />
            <h2 className="text-center">{data.heading2}</h2>
            <br />
            <p className="text-center">{data.description2}</p>
            <br />
            <div className="d-flex justify-content-center">
              <Image src={data.otherImage2} rounded />
            </div>
            <br />
            <br />
            <div className="d-flex justify-content-center">
              <Image src={data.otherImage3} rounded />
            </div>
          </Col>
          <Col sm={4} className="border">
            <SimlarPost />
            <SimilarPostDiv />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SinglePost;
