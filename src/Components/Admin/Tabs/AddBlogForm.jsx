import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import base_url from "../../../../Api/Base_Url";
import { blog_end } from "../../../../Api/End_Point";
import { useNavigate } from "react-router-dom";
const AddBlogForm = () => {
  const apiUrl = base_url + blog_end;
  const navigater = useNavigate();

  const [input, setInput] = useState({
    title: "",
    description: "",
    heading1: "",
    description1: "",
    heading2: "",
    description2: "",
    mainImage: "",
    lattestImage: "",
    otherImage: "",
    otherImage2: "",
    otherImage3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSub = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl, input)
      .then(() => {
        alert("Submit Form Successfuly ");
        navigater("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h4>Post Saree Look Blog</h4>
      <Form onSubmit={handleSub}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Main Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Heading 1</Form.Label>
              <Form.Control name="heading1" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description 1</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description1"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Heading 2</Form.Label>
              <Form.Control name="heading2" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description 2</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description2"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Main Image URL</Form.Label>
          <Form.Control name="mainImage" onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Lattest Image URL</Form.Label>
          <Form.Control name="lattestImage" onChange={handleChange} required />
        </Form.Group>

        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Other Image 1</Form.Label>
              <Form.Control
                name="otherImage"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Other Image 2</Form.Label>
              <Form.Control
                name="otherImage2"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Other Image 3</Form.Label>
              <Form.Control
                name="otherImage3"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddBlogForm;
