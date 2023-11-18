// src/react-components/Form.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitFormData } from '../redux/actions';

const Form = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitFormData(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form</h2>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
