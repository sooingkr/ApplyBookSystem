import { createAction } from "redux-actions";
import { createRequestActionTypes } from "../../../common/saga/createRequestSaga";

export const [UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE] = createRequestActionTypes(
  "updateUser/UPDATE_USER"
);

export const updateUserAction = createAction(UPDATE_USER, ({ oldPassword, password }) => ({
  oldPassword, password
}));

export const UPDATE_USER_INIT = "UPDATE_USER_INIT";