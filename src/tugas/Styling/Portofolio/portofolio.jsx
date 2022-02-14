import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Form,Row,Col,Button} from "react-bootstrap";

export default class Portofolio extends React.Component {
    render () {
        return (
            <div>

<div className="container text-center  " id="bio">
         <h3 className="fs-bold fs-2">My Bio</h3>
         <p className="fs-6 fst-italic fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolores architecto earum ad eos? Velit numquam quidem distinctio, vero at repudiandae nulla, adipisci, corporis molestias dolore quaerat eveniet. Repellendus, blanditiis.
         </p>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
                <h6 class="fs-5">Experience</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolores architecto earum ad eos? Velit numquam quidem distinctio, vero at repudiandae nulla, adipisci, corporis molestias dolore quaerat eveniet. Repellendus, blanditiis
                </p>
            </div>   
            <div className="col-lg-4 col-md-4 col-sm-12">
                <h6>Education</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolores architecto earum ad eos? Velit numquam quidem distinctio, vero at repudiandae nulla, adipisci, corporis molestias dolore quaerat eveniet. Repellendus, blanditiis
                    </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <h6>Achivement</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolores architecto earum ad eos? Velit numquam quidem distinctio, vero at repudiandae nulla, adipisci, corporis molestias dolore quaerat eveniet. Repellendus, blanditiis
                </p>
            </div>
        </div>
        <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
    )}}