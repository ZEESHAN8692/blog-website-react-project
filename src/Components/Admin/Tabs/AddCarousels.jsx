import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import base_url from "../../../../Api/Base_Url";
import { slider_end } from "../../../../Api/End_Point";
import { useNavigate } from "react-router-dom";

const AddCarousels = () => {
  const apiUrl = base_url + slider_end;
  const navigater = useNavigate();
  const [data, setData] = useState({
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(apiUrl, data)
      .then(() => {
        alert("Data Submited");
        navigater("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h2 className="text-center">Add Carousels Image</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="basic-url">Enter Valid Image Url </Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            https://example.com/users/
          </InputGroup.Text>
          <Form.Control
            id="basic-url"
            aria-describedby="basic-addon3"
            name="image"
            onChange={handleChange}
            required
          />
        </InputGroup>
        <Button type="submit">Submit form</Button>
      </Form>
    </>
  );
};

export default AddCarousels;
