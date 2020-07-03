import createRequestSaga from "../../../common/saga/createRequestSaga";
import { takeEvery } from "redux-saga/effects";
import * as bookListApi from "../api/bookListApi";
import { BOOKS } from "../actionCreators";

// 사가 생성
const BookListSaga = createRequestSaga(BOOKS, bookListApi.bookListApi);
export function* bookListSaga() {
  yield takeEvery(BOOKS, BookListSaga);
}
