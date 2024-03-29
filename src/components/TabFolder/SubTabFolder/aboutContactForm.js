import React, { useState } from 'react';
import { send } from 'emailjs-com';

function AboutContactForm(props) {

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
      });

      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_9w1vdyj',
            'template_bcczx6p',
            toSend,
            'mQeg9BBrfezQkPMsS'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              setToSend({ ...toSend, from_name: '', message: '', reply_to: '' });
              alert('Message Sent');
            })
            .catch((err) => {
              console.log('FAILED...', err);
              alert('Message Failed');
            });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return (
        <div className='about-contact-form-contact'>
            <form className='contact-form' onSubmit={onSubmit}>
              <div className='contact-form-name-title'>Name :</div>
                <input
                  className='contact-form-name'
                  type='text'
                  name='from_name'
                  placeholder='from name'
                  value={toSend.from_name}
                  onChange={handleChange}
                />
              <div className='contact-form-message-title'>You're Message :</div>
                <input
                  className='contact-form-message'
                  type='text'
                  name='message'
                  placeholder='Your message'
                  value={toSend.message}
                  onChange={handleChange}
                />
              <div className='contact-form-email-title'>Email :</div>
                <input
                  className='contact-form-email'
                  type='email'
                  name='reply_to'
                  placeholder='Your email'
                  value={toSend.reply_to}
                  onChange={handleChange}
                />
                <button className='contact-form-btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AboutContactForm;