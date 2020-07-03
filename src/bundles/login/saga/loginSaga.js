import createRequestSaga from "../../common/saga/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as loginApi from "../api/loginApi";
import { LOGIN } from "../actionCreators";

const LoginSaga = createRequestSaga(LOGIN, loginApi.loginApi);
export function* loginSaga() {
  yield takeLatest(LOGIN, LoginSaga);
}
