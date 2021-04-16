import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

const AddServices = () => {
  const [info,  setInfo] = useState({})
  const [file, setFile] = useState(null)

  const handleBlur = event => {
    const newInfo = {...info}
    newInfo[event.target.name] = event.target.value;
    setInfo(newInfo)
 
  }
  const handleChangeFile = event => {
    const newFile = event.target.files[0];
    setFile(newFile)
  }
 
  const handleSubmit = event => {
    const formData = new FormData()
  formData.append('file', file)
  formData.append('name', info.name)
  formData.append('email', info.price)
  formData.append('description', info.description)

  fetch('http://localhost:5000/addServices', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
  event.preventDefault()
}
  
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridText">
            <Form.Label>Service Name</Form.Label>
            <Form.Control type="text" onBlur={handleBlur} name="name" placeholder="Enter the service name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number"  onBlur={handleBlur} name="price" placeholder="Enter the service price" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridTextArea">
            <Form.Label>Write the service description</Form.Label>
            <textarea
             onBlur={handleBlur}
            name="description"
              className="form-control"
              placeholder="description"
              aria-label="With textarea"
            ></textarea>
          </Form.Group>
          <Form.Group className="mt-2" as={Col} controlId="formGridFile">
            <Form.Label>Upload Service Photos</Form.Label>
            <Form.Control name="file" onChange={handleChangeFile} type="file" />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
  
};

export default AddServices;
