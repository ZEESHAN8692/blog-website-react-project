import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
const AddBlogForm = () => {
  const [data, setData] = useState({});
  //   const [input, setInput] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleSub = (e) => {
    e.preventDefault();
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
          <Form.Control name="date" onChange={handleChange} required />
        </Form.Group>

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddBlogForm;
