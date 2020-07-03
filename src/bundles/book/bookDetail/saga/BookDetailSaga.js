import createRequestSaga from "../../../common/saga/createRequestSaga";
import { takeEvery } from "redux-saga/effects";
import * as bookDetailApi from "../api/bookDetailApi";
import { BOOK } from "../actionCreators";

// 사가 생성
const BookSaga = createRequestSaga(BOOK, bookDetailApi.bookApi);
export function* bookSaga() {
  yield takeEvery(BOOK, BookSaga);
}
