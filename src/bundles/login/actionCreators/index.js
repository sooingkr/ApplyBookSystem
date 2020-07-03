import { createAction } from "redux-actions";
import { createRequestActionTypes } from "../../common/saga/createRequestSaga";

export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  "login/LOGIN"
);

export const loginAction = createAction(LOGIN, ({ mbrId, password }) => ({
  mbrId,
  password
}));
