import { handleActions } from "redux-actions";
import {
  BOOKUPDATE,
  BOOKUPDATE_SUCCESS,
  BOOKUPDATE_FAILURE,
  BOOKUPDATE_INIT
} from "../actionCreators";

const initialState = {
  result: null,
  bookUpdateError: null,
  isBookUpdating: false,
  isBookUpdated: false
};

const bookUpdateReducer = handleActions(
  {
    [BOOKUPDATE]: state => ({
      ...state,
      isBookUpdating: true
    }),
    [BOOKUPDATE_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      bookUpdateError: null,
      result: data.result,
      isBookUpdating: false,
      isBookUpdated: true
    }),
    [BOOKUPDATE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      bookUpdateError: error,
      isBookUpdating: false,
      isBookUpdated: false
    }),
    // 초기화
    [BOOKUPDATE_INIT]: state => ({
      ...state,
      result: null,
      bookUpdateError: null,
      isBookUpdating: false,
      isBookUpdated: false
    })
  },
  initialState
);

export default bookUpdateReducer;
