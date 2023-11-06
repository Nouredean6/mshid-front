import React, {useState} from 'react';
import "./contactFormStyle.css";
import { toast } from "react-toastify";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData,[name]:value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch('/contact',{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if(response.ok){
        toast.success('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        toast.error('Error sending email')
      }
  
    } catch (error) {
      console.error('Eroor: ', error)
    }
  };

  return (
    <div className="form-container">
      <h1>Send Message to Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange} 
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange} 
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange} 
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange} 
        />  
        <button type="submit">Send Message</button>
      </form>
    </div>
    
  );
}

export default ContactForm;