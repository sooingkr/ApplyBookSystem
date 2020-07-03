import createRequestSaga from "../../../common/saga/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as requestRidiBookInfoApi from "../api/requestRidiBookInfoApi";
import { REQUEST_RIDI } from "../actionCreators";

const RequestRidiBookInfoSaga = createRequestSaga(
  REQUEST_RIDI,
  requestRidiBookInfoApi.requestRidiBookInfoApi
);

function* RequestRidiSaga(action) {
  yield RequestRidiBookInfoSaga(action);
}

export function* requestRidiInfoSaga() {
  yield takeLatest(REQUEST_RIDI, RequestRidiSaga);
}
