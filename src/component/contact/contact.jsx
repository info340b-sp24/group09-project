import React, { useState } from 'react';
import './contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  }
 );

 const [submitted, setSubmitted] = useState(false);

 const handleChange = (event) => {
  const {name, value} = event.target;
  setForm(
    preForm => ({
      ...preForm,
      [name]: value
    }
    )
  );
 };

 const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Form submitted', form);

  setForm({
    name: '',
    email: '',
    message: ''
  });
  
  setSubmitted(true);
 };

  return (
    <div>
      <br></br><br></br>
        <div>
        <h2 className='h2'>Get in Touch</h2>
        <p className='para'>Have a question or problem? Fill out the form below and we'll get back to you as soon as possible.</p>
        {submitted && <p className='success-submission'>Thanks for your feedback! Any thought will help improve our service. We will get back to you soon!</p> }
        <form id="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name" className='label'>Name:</label>
            <input type="text" id="name" name="name" required className='text'
            value={form.name} onChange={handleChange}/>
            
            <label htmlFor="email" className='label'>Email:</label>
            <input type="email" id="email" name="email" required className='text'
            value={form.email} onChange={handleChange}/>
            
            <label htmlFor="message" className='label'>Message:</label>
            <textarea id="message" name="message" rows="5" required className='text'
            value={form.message} onChange={handleChange}></textarea>
            
            <button type="submit" value="Submit">Submit </button>
        </form>
    </div>
    </div>
  )
}
