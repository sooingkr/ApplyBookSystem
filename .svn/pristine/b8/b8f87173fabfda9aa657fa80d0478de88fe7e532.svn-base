import { handleActions } from "redux-actions";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../actionCreators";

const initialState = {
  loginInfo: null,
  loginError: null
};

const loginReducer = handleActions(
  {
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: loginInfo }) => ({
      ...state,
      loginError: null,
      loginInfo: loginInfo.result
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      loginError: error
    })
  },
  initialState
);

export default loginReducer;
