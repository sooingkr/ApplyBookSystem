import { createAction } from "redux-actions";
import { createRequestActionTypes } from "../../../common/saga/createRequestSaga";

export const [
  REQUEST_BOOK,
  REQUEST_BOOK_SUCCESS,
  REQUEST_BOOK_FAILURE
] = createRequestActionTypes("requestBook/REQUEST_BOOK");

export const [
  REQUEST_YES24,
  REQUEST_YES24_SUCCESS,
  REQUEST_YES24_FAILURE
] = createRequestActionTypes("requestYes24/REQUEST_YES24");

export const [
  REQUEST_SELECTED_BOOK_INFO,
  REQUEST_SELECTED_BOOK_INFO_SUCCESS,
  REQUEST_SELECTED_BOOK_INFO_FAILURE
] = createRequestActionTypes(
  "requestSelectedBookInfo/REQUEST_SELECTED_BOOK_INFO"
);

export const [
  REQUEST_KYOBO,
  REQUEST_KYOBO_SUCCESS,
  REQUEST_KYOBO_FAILURE
] = createRequestActionTypes("requestKyobo/REQUEST_KYOBO");

export const [
  REQUEST_RIDI,
  REQUEST_RIDI_SUCCESS,
  REQUEST_RIDI_FAILURE
] = createRequestActionTypes("requestRidi/REQUEST_RIDI");

export const requestBookAction = createAction(
  REQUEST_BOOK,
  ({
    bookName,
    reqType,
    reqYearMonth,
    reqUrl,
    address,
    price,
    bookType,
    etc
  }) => ({
    bookName,
    reqType,
    reqYearMonth,
    reqUrl,
    address,
    price,
    bookType,
    etc
  })
);

export const requestSelectedBookInfoAction = createAction(
  REQUEST_SELECTED_BOOK_INFO,
  ({ bookName, reqUrl, price }) => ({
    bookName,
    reqUrl,
    price
  })
);

export const requestYes24BookInfoAction = createAction(
  REQUEST_YES24,
  ({ bookName, active, count }) => ({ bookName, active, count })
);

export const SELECT_INDEX = "requestSelectedIndex/SELECT_INDEX";
export const searchSelectIndex = createAction(SELECT_INDEX, index => index);

export const REQUEST_BOOK_INIT = "REUQEST_BOOK_INIT";

export const REQUEST_INIT = "REQUEST_INIT";

export const REQUEST_YES24_SEARCH_MODAL = "REQUEST_YES24_SEARCH_MODAL";

export const REQUEST_KYOBO_SEARCH_MODAL = "REQUEST_KYOBO_SEARCH_MODAL";
export const REQUEST_RIDI_SEARCH_MODAL = "REQUEST_RIDI_SEARCH_MODAL";

export const requestKyoboInfoAction = createAction(
  REQUEST_KYOBO,
  ({ bookName, active }) => ({ bookName, active })
);

export const requestRidiInfoAction = createAction(
  REQUEST_RIDI,
  ({ bookName, active }) => ({ bookName, active })
);
