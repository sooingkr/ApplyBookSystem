import createRequestSaga from "../../common/saga/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as joinApi from "../api/joinApi";
import { JOIN } from "../actionCreators";

const JoinSaga = createRequestSaga(JOIN, joinApi.joinApi);

function* join(action) {
  yield JoinSaga(action);
}

export function* joinSaga() {
  yield takeLatest(JOIN, join);
}
