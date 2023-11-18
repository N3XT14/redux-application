// src/react-components/FormDataDisplay.js
import React from 'react';
import { connect } from 'react-redux';

const FormDataDisplay = ({ submittedData }) => {
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

// mapStateToProps: Maps the state from the Redux store to props
const mapStateToProps = (state) => {
  return {
    submittedData: state.submittedData,
  };
};

// Connect the component to the Redux store
export default connect(mapStateToProps)(FormDataDisplay);
