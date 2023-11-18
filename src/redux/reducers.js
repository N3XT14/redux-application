// src/redux/reducers.js
import { combineReducers } from 'redux';

const formDataReducer = (state = null, action) => {
  switch (action.type) {
    case 'SUBMIT_FORM_DATA':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  submittedData: formDataReducer,
  // Add other reducers if needed
});

export default rootReducer;
