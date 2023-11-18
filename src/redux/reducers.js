// src/redux/reducers.js
const initialState = {
  submittedData: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_FORM_DATA':
      return {
        ...state,
        submittedData: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
