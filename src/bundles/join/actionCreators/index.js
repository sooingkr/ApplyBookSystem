import { createAction } from "redux-actions";
import { createRequestActionTypes } from "../../common/saga/createRequestSaga";

export const [JOIN, JOIN_SUCCESS, JOIN_FAILURE] = createRequestActionTypes(
  "join/JOIN"
);

export const joinAction = createAction(JOIN, ({ empNum, id, name, password }) => ({
  empNum, id, name, password
}));

export const JOIN_INIT = "JOIN_INIT";