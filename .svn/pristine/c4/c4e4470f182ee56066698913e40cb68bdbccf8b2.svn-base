import createRequestSaga from "../../../common/saga/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as updateUserApi from "../api/updateUserApi";
import { UPDATE_USER } from "../actionCreators";

const UpdateUserSaga = createRequestSaga(
  UPDATE_USER,
  updateUserApi.updateUserApi
);

function* updateUser(action) {
  yield UpdateUserSaga(action);
}

export function* updateUserSaga() {
  yield takeLatest(UPDATE_USER, updateUser);
}
