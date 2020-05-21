import useFetch from '../../utils/fetch';
import { ADD_CONSULTANT, UPDATE_CONSULTANT, REMOVE_CONSULTANT, ADD_ERROR } from '../actionTypes';

export const AddConsultant = async (dispatch, data) => {
  try {
    const response = await useFetch('post', 'https://our-api.com', data);
    dispatch({
      type: ADD_CONSULTANT,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_ERROR,
      payload: error.message,
    });
  }
};

export const UpdateConsultant = async (dispatch, data) => {
  try {
    const response = await useFetch('post', 'https://our-api.com', data);
    dispatch({
      type: UPDATE_CONSULTANT,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_ERROR,
      payload: error.message,
    });
  }
};

export const RemoveConsultant = async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_CONSULTANT,
    });
  } catch (error) {
    dispatch({
      type: ADD_ERROR,
      payload: error.message,
    });
  }
};
