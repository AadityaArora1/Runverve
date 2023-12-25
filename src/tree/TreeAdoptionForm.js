// TreeAdoptionForm.js

import React, { useState } from 'react';
import './TreeAdoptionForm.css';

const TreeAdoptionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [treeType, setTreeType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, location, treeType });
  };

  return (
    <div className="tree-adoption-form-container">
      <h2>Tree Adoption Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <label>
          Tree Type:
          <input type="text" value={treeType} onChange={(e) => setTreeType(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TreeAdoptionForm;
