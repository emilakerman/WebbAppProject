import React from 'react';
import '../AboutUsPage.css'

function AboutUsPage() {
  const contacts = [
    {
      name: 'MovieLand',
      email: 'movieland@gmail.com',
      phone: '555-578-55325',
      Location: 'Kolarängsvägen 67 / 17843 Stockholm'
    }
  ];

  return (
    <div className='aboutOuterContainer'>
    <div className='aboutUsContainer'>
      <h1 className='aboutUsh1'>Hello. Welcome to MovieLand</h1>
      <h2 className='aboutUsh2'>If you need any help please feel free to contact us anytime!</h2>
      <ul className='aboutUsUl'>
        {contacts.map(contact => (
          <li className='aboutUsLI' key={contact.email}>
            <h2 className='aboutUsh2'>{contact.name}</h2>
            <p className="contact-info">Email: {contact.email}</p>
            <p className="contact-info">Phone: {contact.phone}</p>
            <p className="contact-info">Location: {contact.Location}</p>
          </li>    
        ))}
      </ul>
      <div className='containerInputSendEmail'>
        <input type="text"></input>
        <button>Send email</button>
      </div>
    </div>
    </div>
  );
}

export default AboutUsPage;