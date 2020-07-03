import createRequestSaga from "../../../common/saga/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as requestYes24BookInfoApi from "../api/requestYes24BookInfoApi";
import { REQUEST_YES24 } from "../actionCreators";

const RequestYes24BookInfoSaga = createRequestSaga(
  REQUEST_YES24,
  requestYes24BookInfoApi.requestYes24BookInfoApi
);

function* requestYes24(action) {
  yield RequestYes24BookInfoSaga(action);
}

export function* requestYes24BookInfoSaga() {
  yield takeLatest(REQUEST_YES24, requestYes24);
}
