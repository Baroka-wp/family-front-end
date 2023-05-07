import {
  //   ADD_PERSON,
  FETCH_GENEALOGY_FAILLED,
  FETCH_GENEALOGY_SUCCESS,
  FETCH_GENEALOGY_REQUEST,
} from '../../api/api.genealogy';

const initialState = {
  items: {
    name: 'root',
    children: [],
  },
  loading: false,
  error: null,
};

const genealogyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENEALOGY_REQUEST:
      return { ...state, loading: true };
    case FETCH_GENEALOGY_SUCCESS:
      return {
        ...state,
        items: action.payload,
        error: null,
        loading: false,
      };
    case FETCH_GENEALOGY_FAILLED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default genealogyReducer;
