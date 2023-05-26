import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { useForm, ValidationError } from '@formspree/react';


// const priceList = [
//   {
//     id: "price_1N5u7VSIhd53d8IYCLpFXcSo",
//     name: "Tesla Malibu",
//   },
//   {
//     id: "price_1N77vCSIhd53d8IYS6lz3wpe",
//     name: "Toyota Aventador",
//   },
//   {
//     id: "price_1N95zCSIhd53d8IYcfCrQBrm",
//     name: "BMW X3",
//   },

//   {
//     id: "price_1N96bqSIhd53d8IYTj2Hhzn6",
//     name: "Nissan Mercielago",
//   },
//   {
//     id: "price_1N9KbPSIhd53d8IYsbiHdOnv",
//     name: "Mercedes Benz XC90",
//   },
//   {
//     id: "price_1N9KcGSIhd53d8IYxG8tjF59",
//     name: "Audi Fiesta",
//   },
//   {
//     id: "price_1N9KcsSIhd53d8IYfzbLLWFt",
//     name: "Rolls Royce Colorado",
//   }
// ];


function BookingForm(props) {
  const [state, handleSubmit] = useForm("mnqyyvoq");

  // priceID = priceList.filter(item => item.name === props.name).map(filteredItem =>(<p>{filteredItem.id}</p>));


  if (state.succeeded) {
      return (
      <div>
        {/* <h1>{props.name}</h1> */}
        <p>Thanks for contacting us!</p>
        <form action="http://localhost:4242/create-checkout-session" method="POST">
        <button type="submit" id="checkout-button">Checkout</button>
      </form>
      </div>
      );
  }
  
 
  return (
    <Form method="post" enctype="text/plain" onSubmit={handleSubmit}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" name="First Name" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" name="Last Name" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" name="Email" />
      </FormGroup>

      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" name="Phone Number" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="From Address" name="From Address" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="To Address" name=" To Address" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="Person option" id="">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="Luggage option" id="">
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" name="Date" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
          name="Time"
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
          name="Message"
        ></textarea>
      </FormGroup>

      <button className=" contact__btn" type="submit" disabled={state.submitting}>
        Submit Information
      </button>
    </Form>
  );
}

export default BookingForm;
