import React, { useRef, useState } from "react";
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
const formControl = {
  padding: "20px"
}

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const form = useRef();
  const [isActive, setActive] = useState('');
  const [isChecked, setIsChecked] = useState(false);
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

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setActive(!isActive);
  };

  const handleDropdown = (data) => {
    if(data == 'Other'){
      setActive(true);
      setIsChecked(false);
    }else{
      setActive(false);
      setIsChecked(true);
    }
  }
  console.log(isChecked);

  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form ref={form} onSubmit={sendEmail}>
            <Title>Contact Us</Title>
            <input type="text" className="px-4 py-3 rounded-md bg-white text-[#090017]" placeholder="Name" name="user_name" />
            <input type="email" className="px-4 py-3 rounded-md bg-white text-[#090017]" placeholder="Email" name="user_email" />
            {!isActive && (
              <select name="subject" className="px-4 py-3 rounded-md bg-white text-[#090017]" onChange={(e) => {
                handleDropdown(e.target.value);
                
                }}>
                <option selected="false" disabled>Select Subject</option>
                <option value="Therapy Solution">Therapy Solution</option>
                <option value="Doctors Portal">Doctors Portal</option>
                <option value="ERP/Accounts/HR">ERP/Accounts/HR</option>
                <option value="Web Application">Web Application</option>
                <option value="Mobile Application">Mobile Application</option>
                <option value="Other">Other</option>
              </select>
            )}
            {isActive && (
              <input type="text" className="px-4 py-3 rounded-md bg-white text-[#090017]" placeholder="Subject" name="subject" />
            )}
            {isActive && (
              <>
                <div className="py-1">
                <label className="mr-2" for="checkbox">Return to select option</label>
                <input type="checkbox" id="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="px-4 py-3 rounded-md bg-white text-[#fff]" />
                </div>
              </>
              
            )}
            <textarea className="bg-white text-[#090017] px-4 py-3 rounded-md"
              placeholder="Write your message"
              name="message"
              rows={4}
            ></textarea>
            <button className="px-4 py-3 rounded-md hover:bg-orange-800 bg-orange-700" type="submit">Send</button>
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