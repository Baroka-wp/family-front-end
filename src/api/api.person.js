import axios from 'axios';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_PERSON_SUCCESS = 'FETCH_PERSON_SUCCESS';
export const FETCH_PERSON_FAILLED = 'FETCH_BOOK_FAILLED';
export const ADD_PERSON = 'POST_BOOK';

const fetchPersonRequest = () => ({ type: FETCH_REQUEST });
const fetchPersonSuccess = (payload) => ({ type: FETCH_PERSON_SUCCESS, payload });
const fetchPersonFailled = (payload) => ({ type: FETCH_PERSON_FAILLED, payload });
// const postPersonSuccess = (payload) => ({ type: ADD_PERSON, payload });

const url = 'http://localhost:5002/api/v1/index';

export const fetchPersonByname = (name) => async (dispatch) => {
  dispatch(fetchPersonRequest());
  try {
    const response = await axios.get(`${url}/person/?name=${name}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch(fetchPersonSuccess(response.data));
  } catch (error) {
    dispatch(fetchPersonFailled(error));
  }
};
