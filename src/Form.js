import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';


const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, link });
    setName('');
    setLink('');
  };

  const handleSaveResponse = async () => {
    try {
      const response = await axios.get('https://example.com/api/data'); // Replace with your API endpoint
  
      const jsonData = JSON.stringify(response.data, null, 2);
  
      const blob = new Blob([jsonData], { type: 'application/json' });
      saveAs(blob, 'data.json');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button type="submit">Submit</button>
      <button onClick={handleSaveResponse}>Save Response as JSON</button>

    </form>
  );
};



export default Form;
