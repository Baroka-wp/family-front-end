import axios from 'axios';

export const FETCH_GENEALOGY_REQUEST = 'FETCH_GENEALOGY_REQUEST';
export const FETCH_GENEALOGY_SUCCESS = 'FETCH_GENEALOGY_SUCCESS';
export const FETCH_GENEALOGY_FAILLED = 'FETCH_GENEALOGY_FAILLED';

const fetchGenealogyRequest = () => ({ type: FETCH_GENEALOGY_REQUEST });
const fetchGenealogySuccess = (payload) => ({ type: FETCH_GENEALOGY_SUCCESS, payload });
const fetchGenealogyFailled = (payload) => ({ type: FETCH_GENEALOGY_FAILLED, payload });
// const postPersonSuccess = (payload) => ({ type: ADD_PERSON, payload });

const url = 'http://localhost:5002/api/v1/index';

export const getPersonChildrens = (personId) => async (dispatch) => {
  dispatch(fetchGenealogyRequest());
  try {
    const response = await axios.get(`${url}/person_genealogy/?person_id=${personId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch(fetchGenealogySuccess(response.data));
  } catch (error) {
    dispatch(fetchGenealogyFailled(error));
  }
};
