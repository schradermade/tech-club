import React, { useRef } from 'react';
import { Box, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/styles';
import emailjs from '@emailjs/browser';
import './styles.css'

const formInputs = [{
  className: 'form-control',
  name: 'user_name',
  id: 'name',
  type: 'text',
  label: 'Name',
  placeholder: 'John Smith',
},
{
  className: 'form-control',
  name: 'user_phone',
  id: 'phone',
  type: 'text',
  label: 'Phone Number',
  placeholder: '503-555-5555 (optional)',
},
{
  className: 'form-control',
  name: 'user_email',
  id: 'email',
  type: 'email',
  label: 'Email address',
  placeholder: 'you@example.com',
},
{
  className: 'form-control',
  name: 'message',
  id: 'message',
  type: 'textarea',
  label: 'Your message',
  placeholder: 'what questions do you have?',
},
]

const Form = () => {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tllnani', 'template_9hdxgm9', form.current, 'user_Li6o2jgML8vjEfZoCXQQc')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <Box style={matchesSM ? { width: '92vw' } : {}}></Box>
      {formInputs.map(input => (
        <label key={input.label} id={input.id} className="form-label">
          {input.type === 'textarea' ? (
            <textarea className="formField form-textarea" placeholder={input.placeholder} name={input.name} />
          ) : (
            <input
              className="formField form-input"
              type={input.type}
              placeholder={input.placeholder}
              name={input.name} />
          )}
        </label>
      ))}

      <div className="buttonOuter text-end">
        <button className="form-submit" type="submit">Submit</button>
      </div>

    </form>

  );
};
export default Form
