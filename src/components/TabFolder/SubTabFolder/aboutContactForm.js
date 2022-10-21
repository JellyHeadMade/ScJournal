import React, { useState } from 'react';
import { send } from 'emailjs-com';

function AboutContactForm(props) {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });

      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_9w1vdyj',
            'template_5f7up5a',
            toSend,
            'mQeg9BBrfezQkPMsS'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              setToSend({ ...toSend, from_name: '', to_name: '', message: '', reply_to: '' });
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
            <form onSubmit={onSubmit}>
                <input
                  type='text'
                  name='from_name'
                  placeholder='from name'
                  value={toSend.from_name}
                  onChange={handleChange}
                />
                <input
                  type='text'
                  name='to_name'
                  placeholder='to name'
                  value={toSend.to_name}
                  onChange={handleChange}
                />
                <input
                  type='text'
                  name='message'
                  placeholder='Your message'
                  value={toSend.message}
                  onChange={handleChange}
                />
                <input
                  type='text'
                  name='reply_to'
                  placeholder='Your email'
                  value={toSend.reply_to}
                  onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AboutContactForm;