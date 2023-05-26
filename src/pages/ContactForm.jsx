// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help


//website = https://formspree.io/forms/xbjeeypr/submissions


import React from 'react';
import { Form, FormGroup, Input } from "reactstrap";
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xbjeeypr");
  if (state.succeeded) {
      return <p>Thanks for contacting us!</p>;
  }
  return (
      <Form onSubmit={handleSubmit}>
        <FormGroup className="contact__form"> 
            <Input placeholder="Your Name" name="Name" type="text"></Input>
        </FormGroup>
      <FormGroup className="contact__form"> 
      <Input
        placeholder="Your Email"
        id="email"
        type="email" 
        name="email"
      />
      </FormGroup>

      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

        <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    id="message"
                    className="textarea"
                    name="Message"
                  ></textarea>
                </FormGroup>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" className=" contact__btn" disabled={state.submitting}>
      Send Message
      </button>
    </Form>
  );
}
export default ContactForm;