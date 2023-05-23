import React from 'react';
import '../AboutUsPage.css'

function AboutUsPage() {
  const contacts = [
    {
      name: 'Movie Z',
      email: 'movie-z@gmail.com',
      phone: '555-578-55325',
      Location: 'Kolarängsvägen 67 / 17843 Stockholm'
    }
  ];

  return (
    <div>
      <h1>Welcome to Movie Z</h1>
      <h2>If you need any help please feel free to contact us anytime!</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.email}>
            <h2>{contact.name}</h2>
            <p className="contact-info">Email: {contact.email}</p>
            <p className="contact-info">Phone: {contact.phone}</p>
            <p className="contact-info">Location: {contact.Location}</p>
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default AboutUsPage;