import { handleActions } from "redux-actions";
import { JOIN, JOIN_SUCCESS, JOIN_FAILURE, JOIN_INIT } from "../actionCreators";

const initialState = {
  isJoining : false, // 회원가입 처리중 동안 로딩바 제어플레그
  joinErrorReason : '',
  isJoined : false
};

const joinReducer = handleActions(
  {
    [JOIN] : (state, { payload : joinInfo }) => ({
      ...state,
      isJoining : true, 
    }),
    // 가입 성공
    [JOIN_SUCCESS] : (state, { payload: joinInfo }) => ({
      ...state,
      isJoining : false,
      isJoined : true
    }),
    // 가입 실패
    [JOIN_FAILURE] : (state, { payload: error }) => ({
      ...state,
      isJoining : false,
      isJoined : false,
      joinErrorReason : error
    }),
    // 초기화
    [JOIN_INIT] : (state, { payload: initVal }) => ({
      ...state,
      isJoining : false,
      isJoined : false,
      joinErrorReason : null
    })
  },
  initialState
);

export default joinReducer;
