// src/react-components/Form.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { submitFormData } from '../redux/actions';

const Form = ({ formData, onSubmit }) => {
  const [localFormData, setLocalFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(localFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form</h2>
      <label>
        First Name:
        <input type="text" name="firstName" value={localFormData.firstName} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={localFormData.lastName} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={localFormData.email} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

// mapStateToProps: Maps the state from the Redux store to props
// state is the state from Redux Store
// props is the props from the parent component (which is App.js in this case)
// Connecting mapStateToProps lets this component use this.props to get state from the Redux Store and props from the parent component.
const mapStateToProps = (state, props) => {
  return {
    formData: state.submittedData,
  };
};

// mapDispatchToProps: Maps action creators to props
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (formData) => dispatch(submitFormData(formData)),
  };
};

// Connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Form);
