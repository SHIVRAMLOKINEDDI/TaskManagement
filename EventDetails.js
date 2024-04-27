import React from 'react';


function EventDetails() {
  return (
    <div>
      <h1 className="text-center">Indian Cultural Event Name</h1>

      <div className="row">
        <div className="col-md-6 text-center">
          <img src="https://hellolata.files.wordpress.com/2017/12/shutterstock_465558758-illustration-of-india-background-showing-its-culture-and-diversity-with-monument-dance-and-festival.jpg" alt="Event" className="img-fluid" /> 
        </div>
        <div className="col-md-6">
          <p>Paragraph 1: Indian culture is popular across the world. Indian culture is considered as the oldest and most diverse cultures of the world. People of different religions and cultures live here with strong bond. Indian people are highly devoted to their culture and religion. The Indian literature, philosophy, 
            art and music have heavily been influenced by Indian culture and Dharmic religions throughout the history of India.</p>
          <p>Paragraph 2: India is a diverse country and the customs, traditions, food, music, religion and dance differs from place to place within the nation. The diversity in Indian culture is known across the world.

India is multi-ethnic, multi-cultural, multi-lingual and multi-religious society. People in India speak different languages and have diverse lingual tones. Various languages such as Hindi, Gujarati, English, Tamil, Sindhi, Punjabi, Sanskrit,
 Manipuri and Marathi are spoken in India. It is home to people of diverse cultures, backgrounds and lifestyles.</p>
        </div>
      </div>

      <div className="mt-4"> 
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{/* Event Date */}</td>
              <td>{/* Event Time */}</td>
              <td>{/* Event Location */}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EventDetails;