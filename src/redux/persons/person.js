import {
//   ADD_PERSON,
  FETCH_PERSON_FAILLED,
  FETCH_PERSON_SUCCESS,
  FETCH_REQUEST,
} from '../../api/api.person';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_PERSON_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case FETCH_PERSON_FAILLED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default personReducer;
