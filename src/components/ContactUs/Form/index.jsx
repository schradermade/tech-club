// import React, { useRef } from 'react';
// import {Box, useMediaQuery} from '@material-ui/core'
// import { useTheme } from '@material-ui/styles';
// import emailjs from '@emailjs/browser';

// import './styles.css'

// const formInputs = [
//   { id: 'name', type: 'text', label: 'Your name', placeholder: 'your name' },
//   {
//     className: 'form-control',
//     name: 'phone',
//     id: 'tel',
//     type: 'tel',
//     label: 'Phone number',
//     placeholder: '555-555-5555 (optional)',
//   },
//   {
//     className: 'form-control',
//     name: 'email',
//     id: 'email',
//     type: 'email',
//     label: 'Email address',
//     placeholder: 'you@example.com',
//   },
//   {
//     className: 'form-control',
//     name: 'body',
//     id: 'message',
//     type: 'textarea',
//     label: 'Your message',
//     placeholder: 'what questions do you have?',
//   },
// ]

// const Form = () => {
//   const form = useRef();


//   function sendEmail(e) {
//     e.preventDefault();
//     console.log(e)
//     console.log(form)

//     emailjs
//       .sendForm(
//         'service_tllnani',
//         'template_9hdxgm9',
//         e.target,
//         'user_Li6o2jgML8vjEfZoCXQQc'
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//   }

//   const theme = useTheme()
//   const matchesSM = useMediaQuery(theme.breakpoints.down('sm')); 
//   return (
//     <form ref={form} onSubmit={sendEmail} className="form">
//       <Box style={matchesSM ? {width: '92vw'} : {}}></Box>
//       {formInputs.map(input => (
//         <label key={input.label} id={input.id} className="form-label">
//           {input.type === 'textarea' ? (
//             <textarea className="formField form-textarea" placeholder={input.placeholder} />
//           ) : (
//             <input
//               className="formField form-input"
//               type={input.type}
//               placeholder={input.placeholder}
//             />
//           )}
//         </label>
//       ))}
//       <div className="buttonOuter text-end">
//         <button className="form-submit" type="submit">I'm under construction!</button>
//       </div>
      
//     </form>
//   )
// } 

// export default Form
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Form = () => {
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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  
  );
};
export default Form