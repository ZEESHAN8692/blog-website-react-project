import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import base_url from "../../../Api/Base_Url";
import { blog_end } from "../../../Api/End_Point";

const SimilarPost = () => {
  const { id } = useParams(); // Current post id
  const [data, setData] = useState([]);
  const apiUrl = base_url + blog_end;

  const getBlogData = () => {
    axios
      .get(apiUrl)
      .then((res) => {
        // Filter out current post from similar posts
        const filteredData = res.data
          .filter((post) => post.id !== id)
          .slice(0, 8);
        setData(filteredData);
    
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBlogData();
  }, [id]); // Fetch data again if the URL id changes

  return (
    <>
      <h4 className="text-center pt-2">Similar Posts</h4>
      <hr />
      <div className="shadow-sm mb-3" style={{ maxWidth: 540 }}>
        {data?.map((blog) => {
          let { id: blogId, title, lattestImage, date } = blog;

          return (
            <div className="row g-0" key={blogId}>
              <div className="col-md-4">
                <Link to={`/single-post/${blogId}`}>
                  <img
                    src={lattestImage}
                    className="img-fluid p-2"
                    alt={title}
                  />
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

export default SimilarPost;
