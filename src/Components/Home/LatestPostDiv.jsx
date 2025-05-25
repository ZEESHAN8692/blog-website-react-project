import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import base_url from "../../../Api/Base_Url";
import { blog_end } from "../../../Api/End_Point";
import { Col, Container, Row } from "react-bootstrap";

const LatestPostDiv = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const apiUrl = base_url + blog_end;
  const getBlogData = () => {
    axios
      .get(apiUrl)
      .then((res) => {
        const today = new Date();
        const fiveDaysAgo = new Date(today);
        fiveDaysAgo.setDate(today.getDate() - 4);

        const filteredData = res.data.filter((blog) => {
          const postDate = new Date(blog.date);
          return postDate >= fiveDaysAgo;
        });

        setData(filteredData.reverse().slice(0, 3));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getBlogData();
  }, [setData, id]);
  return (
    <>
      <Container>
        <Row>
          <Col className=" pt-2">
            <div className="row gap-2 flex-wrap">
              {data?.map((blog) => {
                let { id, title, description, mainImage, date } = blog;

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
        </Row>
      </Container>
    </>
  );
};

export default LatestPostDiv;
