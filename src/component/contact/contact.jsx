import React from 'react'
import './contact.css'

export default function contact() {
  return (
    <div>
      <br></br><br></br>
        <div>
        <h2 className='h2'>Get in Touch</h2>
        <p className='para'>Have a question or feedback? Fill out the form below and we'll get back to you as soon as possible.</p>
        <form id="contact-form" />
            <label for="name" className='label'>Name:</label>
            <input type="text" id="name" name="name" required className='text'/>
            <label for="email" className='label'>Email:</label>
            <input type="email" id="email" name="email" required className='text'/>
            <label for="message" className='label'>Message:</label>
            <textarea id="message" name="message" rows="5" required className='text'></textarea>
            <button type="submit" value="Submit">Submit </button>
        
    </div>
    </div>
  )
}
