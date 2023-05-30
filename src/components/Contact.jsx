import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";
import { notify } from "react-notify-toast";
// import {SMTPClient } from "email"
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #EF4E23;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const form = useRef();
  // const [success, setSuccess] = useState(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0tdhfg6', 'template_c6wvn8d', form.current, 'k5nAP-W4ksPNcnHWR')
      .then((result) => {
        let myColor = { background: 'green', text: "#FFFFFF" };
        notify.show("Your message has been sent. We'll get back to you soon","custom", 5000, myColor);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form ref={form} onSubmit={sendEmail}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="user_name" />
            <Input placeholder="Email" name="user_email" />
            <Input placeholder="Subject" name="subject" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={5}
            />
            <Button type="submit">Send</Button>
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;