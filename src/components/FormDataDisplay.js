// src/react-components/FormDataDisplay.js
import React from 'react';
import { useSelector } from 'react-redux';

const FormDataDisplay = ({ formData }) => {
  const submittedData = useSelector((state) => state.submittedData);

  return (
    <div>
      <h2>Form Data Display</h2>
      {submittedData && (
        <>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Email: {submittedData.email}</p>
        </>
      )}
    </div>
  );
};

export default FormDataDisplay;
