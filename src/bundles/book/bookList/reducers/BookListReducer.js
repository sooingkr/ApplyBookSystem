import { handleActions } from "redux-actions";
import {
  BOOKS,
  BOOKS_SUCCESS,
  BOOKS_FAILURE,
  BOOKS_CLEAR
} from "../actionCreators";

const initialState = {
  isBooksRequested: false,
  isBookRequesting: false,
  books: null,
  result: null,
  booksError: null
};

const bookListReducer = handleActions(
  {
    [BOOKS]: state => ({
      ...state,
      isBookRequesting: true
    }),

    [BOOKS_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      booksError: null,
      books: data.books,
      result: data.result,
      isBookRequesting: false
    }),
    [BOOKS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      booksError: error,
      isBookRequesting: false
    }),
    [BOOKS_CLEAR]: state => ({
      ...state,
      booksError: null,
      books: null,
      result: null,
      isBooksRequested: false,
      isBookRequesting: false
    })
  },
  initialState
);

export default bookListReducer;
