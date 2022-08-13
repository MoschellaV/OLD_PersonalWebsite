import React, { useState } from "react";
import "../assets/css/Contact.css";
import "../assets/css/Navigation.css";
import { showNotification, updateNotification } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons";
import { Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMeassage] = useState("");

  let data = { name, email, message };

  async function postTheData(e) {
    showNotification({
      id: "load-data",
      loading: true,
      title: "One moment",
      message: "Sending your Email",
      autoClose: false,
      disallowClose: true,
    });
    e.preventDefault();
    e.target.reset();

    console.log(name, email, message);
    try {
      await axios.post("http://localhost:4000/post_data", data).then((res) => {
        if (res.data === "sent") {
          updateNotification({
            id: "load-data",
            color: "green",
            title: "Nice",
            message: "Your message has been sent",
            icon: <IconCheck size={16} />,
            autoClose: 4000,
          });
        } else {
          updateNotification({
            id: "load-data",
            color: "red",
            title: ":(",
            message: "Your message could not be sent",
            icon: <IconX size={16} />,
            autoClose: 5000,
          });
        }
      });
    } catch (err) {
      updateNotification({
        id: "load-data",
        color: "red",
        title: ":(",
        message:
          "Your message could not be sent, check your network connection",
        icon: <IconX size={16} />,
        autoClose: 5000,
      });
    }
  }

  return (
    <Container
      fluid
      className="black-background bg-size posiiton-relative contact-content 
    "
    >
      <Row>
        <Col md={6} xs={12}>
          <div className="contact-div">
            <h2 className="contact-header">Contact Me</h2>
            <br />
            <h4 className="contact-subheader">Email address</h4>
            <p className="info">myemailatmy@gmail.com</p>
            <br />
            <h4 className="contact-subheader">Phone Number</h4>
            <p className="info">416-000-0000</p>
          </div>
        </Col>
        <Col style={{ paddingTop: "40px", paddingBottom: "70px" }}>
          <div className="input-field-div gray-box ">
            <form onSubmit={postTheData}>
              <input
                className="text-input"
                required
                type="text"
                id="name"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                required
                className="text-input "
                type="email"
                id="email"
                placeholder="Your Email"
                autoComplete="new-password"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                required
                className="text-input "
                type="text"
                id="message"
                placeholder="Your Message"
                onChange={(e) => setMeassage(e.target.value)}
              />
              <br />
              <Button
                className="contact-button"
                type="submit"
                // onClick={postTheData}
              >
                Send
              </Button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
