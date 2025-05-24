import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import base_url from "../../../Api/Base_Url";
import { blog_end } from "../../../Api/End_Point";

const SimlarPost = () => {
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
      <h4 className="text-center pt-2">Similar Post</h4>
      <hr />
      <div className="shadow-sm mb-3 " style={{ maxWidth: 540 }}>
        {data?.map((blog) => {
          let { id, title, lattestImage, date } = blog;

          return (
            <div className="row g-0" key={id}>
              <div className="col-md-4">
                <Link to={`/single-post/${id}`}>
                  <img src={lattestImage} className="img-fluid p-2" alt="..." />
                </Link>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text">{title.slice(0, 60)}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated {date}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SimlarPost;
