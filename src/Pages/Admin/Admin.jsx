import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import AddCarousels from "../../Components/Admin/Tabs/AddCarousels";
import AddBlogForm from "../../Components/Admin/Tabs/AddBlogForm";
function Admin() {
  const [activeTab, setActiveTab] = useState(1);
  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  console.log(activeTab);
  return (
    <>
      <h1 className="text-center bg-primary text-white">ADD ALL API DATA </h1>
      <br />
      <div
        className="d-flex justify-content-center align-items-center gap-5 container rounded shadow-lg"
        style={{ height: "50px" }}
      >
        <Nav variant="pills" className="gap-3">
          <Nav.Item>
            <Nav.Link
              className={activeTab === 1 ? "active" : ""}
              onClick={() => handleTab(1)}
            >
              Add Carousels Image
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className={activeTab === 2 ? "active" : ""}
              onClick={() => handleTab(2)}
            >
              Add Blog
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <br />
      <div
        className={
          activeTab === 1 ? "container rounded shadow-lg p-5" : "d-none"
        }
      >
        <AddCarousels />
      </div>

      {/* Add Blog Form  */}

      <div
        className={
          activeTab === 2 ? "container rounded shadow-lg p-5" : "d-none"
        }
      >
        <AddBlogForm />
      </div>
    </>
  );
}

export default Admin;
