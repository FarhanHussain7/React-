// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_zn6wb13', 'template_38tmuk8', form.current, {
//         publicKey: 'AF-DKx0s1yWZOCS51',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail} className="w-full md:w-1/2 p-6 sm:p-8 md:p-16 rounded-3xl shadow-2xl z-10 -mt-8 md:mt-0
// //                   bg-gradient-to-br from-indigo-600 via-blue-800 to-purple-900">
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

// export default ContactForm;

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_zn6wb13', 'template_38tmuk8', form.current, {
//         publicKey: 'AF-DKx0s1yWZOCS51',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         }
//       );
//   };

//   return (
//     <form
//       ref={form}
//       onSubmit={sendEmail}
//       className="w-full max-w-xl mx-auto p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl bg-gradient-to-br from-indigo-700 via-blue-800 to-purple-900 text-white"
//     >
//       <label className="block mb-2 text-sm font-medium">Name</label>
//       <input
//         className="w-full mb-4 px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         type="text"
//         name="user_name"
//         required
//       />

//       <label className="block mb-2 text-sm font-medium">Email</label>
//       <input
//         className="w-full mb-4 px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         type="email"
//         name="user_email"
//         required
//       />

//       <label className="block mb-2 text-sm font-medium">Message</label>
//       <textarea
//         className="w-full mb-6 px-4 py-3 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         name="message"
//         rows="5"
//         required
//       ></textarea>

//       <input
//         className="bg-white text-indigo-700 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer w-full"
//         type="submit"
//         value="Send"
//       />
//     </form>
//   );
// };

// export default ContactForm;

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './index.css'

export const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('Send');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm('service_zn6wb13', 'template_38tmuk8', form.current, {
        publicKey: 'AF-DKx0s1yWZOCS51',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus('Sent!');
          form.current.reset(); // Clears form fields
          setTimeout(() => setStatus('Send'), 3000); // Reset status after delay
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('Failed. Try again!');
          setTimeout(() => setStatus('Send'), 3000);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full max-w-xl mx-auto p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl bg-gradient-to-br from-indigo-700 via-blue-800 to-purple-900 text-white"
    >
      <label className="block mb-2 text-sm font-medium">Name</label>
      <input
        className="w-full mb-4 px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="user_name"
        required
      />

      <label className="block mb-2 text-sm font-medium">Email</label>
      <input
        className="w-full mb-4 px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="email"
        name="user_email"
        required
      />

      <label className="block mb-2 text-sm font-medium">Message</label>
      <textarea
        className="w-full mb-6 px-4 py-3 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="message"
        rows="5"
        required
      ></textarea>

      <input
        className={`font-bold px-6 py-3 rounded-lg transition duration-300 cursor-pointer w-full ${
          status === 'Send'
            ? 'bg-white text-indigo-700 hover:bg-gray-100'
            : status === 'Sending...'
            ? 'bg-blue-500 text-white cursor-wait'
            : status === 'Sent!'
            ? 'bg-green-500 text-white'
            : 'bg-red-500 text-white'
        }`}
        type="submit"
        value={status}
        disabled={status === 'Sending...'}
      />
    </form>
  );
};

export default ContactForm;