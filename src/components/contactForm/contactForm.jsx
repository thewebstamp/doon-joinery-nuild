import "./contactForm.css";
import { Images } from "../../assets/images";
import { useState } from "react";
import axios from 'axios';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://protective-determination-production-8d8f.up.railway.app/send-email', formData);
          
          // Check if the email was sent successfully
          if (response.status === 200) {
            alert('Message sent successfully!');
            setFormData({
              name: '',
              email: '',
              phone: '',
              message: '',
            });
          }
        } catch (error) {
          alert('Error sending message: ' + error.message);
        }
      };

    return (
        <div className="c-form">
            <div className="c-form-base">
                <img src={Images.p6} alt="" />
            </div>
            <form className="c-form-top">
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <textarea
                        name="message"
                        placeholder="Enter message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button onClick={handleSubmit}>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;