import { createAction } from "redux-actions";
import { createRequestActionTypes } from "../../../common/saga/createRequestSaga";

export const [BOOKS, BOOKS_SUCCESS, BOOKS_FAILURE] = createRequestActionTypes(
  "book/BOOKS"
);

export const booksAction = createAction(BOOKS, payload => payload);

export const [BOOKS_CLEAR] = "books/BOOKS_CLEAR";
export const booksClearAction = createAction(BOOKS_CLEAR);
