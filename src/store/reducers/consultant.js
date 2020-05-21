import { ADD_CONSULTANT, UPDATE_CONSULTANT, REMOVE_CONSULTANT } from '../actionTypes';

const initialState = {
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONSULTANT:
      return { ...state, data: payload };
    case UPDATE_CONSULTANT:
      return { ...state, data: payload };
    case REMOVE_CONSULTANT:
      return { ...state, data: [] };
    default:
      return state;
  }
};
