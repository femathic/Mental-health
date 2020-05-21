import { ADD_PROFILE } from '../actionTypes';

const initialState = {
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PROFILE:
      return { ...state, data: payload };
    default:
      return state;
  }
};
