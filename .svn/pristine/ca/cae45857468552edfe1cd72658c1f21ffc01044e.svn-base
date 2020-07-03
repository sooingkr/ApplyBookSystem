import { createAction } from "redux-actions";
import { createRequestActionTypes } from "../../../common/saga/createRequestSaga";

export const [BOOK, BOOK_SUCCESS, BOOK_FAILURE] = createRequestActionTypes(
  "book/BOOK"
);

export const bookAction = createAction(BOOK, ordNum => ordNum);

export const [
  BOOKUPDATE,
  BOOKUPDATE_SUCCESS,
  BOOKUPDATE_FAILURE,
  BOOKUPDATE_INIT
] = createRequestActionTypes("book/BOOKUPDATE");

export const [
  REJECT,
  REJECT_SUCCESS,
  REJECT_FAILURE
] = createRequestActionTypes("book/REJECT");

export const bookUpdateAction = createAction(
  BOOKUPDATE,
  ({ ordNum, status, rejectReason }) => ({ ordNum, status, rejectReason })
);

export const bookUpdateInit = createAction(BOOKUPDATE_INIT);

export const BOOK_CLEAR = "book/BOOK_CLEAN";
export const bookClear = createAction(BOOK_CLEAR);
