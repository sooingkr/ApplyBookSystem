import createRequestSaga from "../../../common/saga/createRequestSaga";
import { takeEvery } from "redux-saga/effects";
import * as bookUpdateApi from "../api/bookUpdateApi";
import { BOOKUPDATE } from "../actionCreators";

// 사가 생성
const BookUpdateSaga = createRequestSaga(
  BOOKUPDATE,
  bookUpdateApi.bookUpdateApi
);
export function* bookUpdateSaga() {
  yield takeEvery(BOOKUPDATE, BookUpdateSaga);
}
