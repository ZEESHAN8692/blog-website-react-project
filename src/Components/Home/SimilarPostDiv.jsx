import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import base_url from "../../../Api/Base_Url";
import { blog_end } from "../../../Api/End_Point";
import { Col, Container, Row } from "react-bootstrap";

const SimilarPostDiv = () => {
  const [data, setData] = useState([]);
  const apiUrl = base_url + blog_end;
  const getBlogData = () => {
    axios
      .get(apiUrl)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getBlogData();
  }, [setData]);
  return (
    <>
      <Container>
        <Row>
          <Col className=" pt-2">
            <div className="row gap-2 flex-wrap">
              {data?.map((blog) => {
                let { id, title, description, mainImage } = blog;

                return (
                  <div
                    className="shadow-sm"
                    style={{ width: "23rem" }}
                    key={id}
                  >
                    <Link to={`/single-post/${id}`}>
                      <img src={mainImage} className="card-img-top" alt="..." />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title pt-2">
                        {title.slice(0, 60)}...
                      </h5>
                      <p className="card-text">
                        {description.slice(0, 100)}...
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SimilarPostDiv;
