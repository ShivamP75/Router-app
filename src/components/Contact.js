import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className=" row text-center">
        <div className="col-3"></div>
        <div className="col-6">
        <h3>Fill Below form, we will contact you in 2 working hours.</h3>
        <ContactForm />
        </div>
        <div className="col-3"></div>
    </div>
  );
}

