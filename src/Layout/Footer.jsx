import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <img src="/logo.png" alt="" height={"100px"} />

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0 ">
                <li>
                  <a href="#!" className="text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Home
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2025 Copyright : Fashion Center
        </div>
      </footer>
    </>
  );
};

export default Footer;
