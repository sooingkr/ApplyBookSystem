import { createRequestSimpleSaga } from "../../../common/saga/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as requestKyoboBookInfoApi from "../api/requestKyoboBookInfoApi";
import { REQUEST_KYOBO } from "../actionCreators";

const RequestKyoboBookInfoSaga = createRequestSimpleSaga(
  REQUEST_KYOBO,
  requestKyoboBookInfoApi.requestKyoboBookInfoApi
);

function* requestKyoboSaga(action) {
  yield RequestKyoboBookInfoSaga(action);
}

export function* requestKyoboBookInfoSaga() {
  yield takeLatest(REQUEST_KYOBO, requestKyoboSaga);
}
