import createRequestSaga from "../../../common/saga/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as requestBookApi from "../api/requestBookApi";
import { REQUEST_BOOK } from "../actionCreators";

const RequestBookSaga = createRequestSaga(
  REQUEST_BOOK,
  requestBookApi.requestBookApi
);
function* requestBook(action) {
  yield RequestBookSaga(action);
}
export function* requestBookSaga() {
  yield takeLatest(REQUEST_BOOK, requestBook);
}
