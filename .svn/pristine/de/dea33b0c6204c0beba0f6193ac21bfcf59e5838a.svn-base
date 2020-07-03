import { handleActions } from "redux-actions";
import {
  BOOK,
  BOOK_SUCCESS,
  BOOK_FAILURE,
  BOOK_CLEAR
} from "../actionCreators";

const initialState = {
  book: {
    ordNum: null,
    empNum: null,
    mbrName: null,
    bookName: null,
    address: null,
    reqType: null,
    reqYearMonth: null,
    status: "",
    reqUrl: null,
    price: null,
    regDt: null,
    ISBN10: null,
    rejectReason: null
  },
  result: null,
  bookError: null,
  isBookRequesting: false,
  isBookRequested: false
};

const bookReducer = handleActions(
  {
    [BOOK]: state => ({
      isBookRequesting: true
    }),

    [BOOK_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      bookError: null,
      book: data.reqBookInfo,
      result: data.result,
      isBookRequesting: false
    }),
    [BOOK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      bookError: error,
      isBookRequesting: false
    }),
    [BOOK_CLEAR]: state => ({
      ...state,
      book: {
        ordNum: null,
        empNum: null,
        mbrName: null,
        bookName: null,
        address: null,
        reqType: null,
        reqYearMonth: null,
        status: "",
        reqUrl: null,
        price: null,
        regDt: null,
        ISBN10: null,
        rejectReason: null
      },
      result: null,
      bookError: null,
      isBookRequesting: false,
      isBookRequested: false
    })
  },
  initialState
);

export default bookReducer;
