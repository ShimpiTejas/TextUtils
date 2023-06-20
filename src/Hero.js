import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";




export const Hero = (props) => {

    let textData;
  const [text, setText] = useState("");

  const handleUpClick = () => {
    textData = text.toUpperCase();
    setText(textData);
  };

  

  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">TextUtils</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="container  my-5">
        <InputGroup>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="Enter the text to analyze"
            aria-label="With textarea"
            value={text}
            onChange={(e) => {
                setText(e.target.value)
            }}
          />
        </InputGroup>

        <Button variant="primary mx-2 my-2" onClick={handleUpClick}>
          Change to Upper Case
        </Button>
        <Button variant="primary mx-2 my-2" onClick={()=>{textData = text.toLowerCase(); setText(textData) }}>Change to Lower case</Button>



        <h2>Your Text Summary Here :</h2>

        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split("").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        
      </div>
    </div>
  );
};
