import { call, put } from "redux-saga/effects";
import {
  SUCCESS,
  SERVER_ERROR_CODE,
  SERVER_ERROR_CODE_MSG
} from "../constants/commonConstant";

export const createRequestActionTypes = type => {
  const REQUEST = type;
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const INIT = `${type}_INIT`;
  return [REQUEST, SUCCESS, FAILURE, INIT];
};

export default function createRequestSaga(type, request) {
  const TYPE_SUCCESS = `${type}_SUCCESS`;
  const TYPE_FAILURE = `${type}_FAILURE`;
  return function*(action) {
    try {
      const response = yield call(request, action.payload);

      if (response.result.retCode === SUCCESS) {
        yield put({
          type: TYPE_SUCCESS,
          payload: response,
          error: false
        });
      } else {
        yield put({
          type: TYPE_FAILURE,
          payload: response.result,
          error: true
        });
      }
    } catch (e) {
      yield put({
        type: TYPE_FAILURE,
        payload: {
          retCode: SERVER_ERROR_CODE,
          retMsg: SERVER_ERROR_CODE_MSG
        },
        error: true
      });
    }
  };
}

export function createRequestSimpleSaga(type, request) {
  const TYPE_SUCCESS = `${type}_SUCCESS`;
  const TYPE_FAILURE = `${type}_FAILURE`;
  return function*(action) {
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: TYPE_SUCCESS,
        payload: response,
        error: false
      });
    } catch (e) {
      yield put({
        type: TYPE_FAILURE,
        payload: {
          retCode: SERVER_ERROR_CODE,
          retMsg: SERVER_ERROR_CODE_MSG
        },
        error: true
      });
    }
  };
}
