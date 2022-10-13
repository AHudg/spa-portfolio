import React, { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Form", formState);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log("Handle Form", formState);
  };

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="row my-2">
          <label htmlFor="name" className="col-4 text-end">
            Name:
          </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
            className="col-7"
          />
        </div>
        <div className="row my-2">
          <label htmlFor="email" className="col-4 text-end">
            Email address:
          </label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
            className="col-7"
          />
        </div>
        <div className="row my-2">
          <label htmlFor="message" className="col-4 text-end">
            Message:
          </label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
            className="col-7"
          />
        </div>
        <button data-testid="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
