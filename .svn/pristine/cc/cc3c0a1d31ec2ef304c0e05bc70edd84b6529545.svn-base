import { handleActions } from "redux-actions";
import { UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE, UPDATE_USER_INIT } from "../actionCreators";

const initialState = {
  isUpdatingUser : false, 
  updateUserErrorReason : null,
  isUpdatedUser : false
};

const updateUserReducer = handleActions(
  {
    [UPDATE_USER] : (state, { payload : joinInfo }) => ({
      ...state,
      isUpdatingUser : true, 
    }),
    [UPDATE_USER_SUCCESS] : (state, { payload: joinInfo }) => ({
      ...state,
      isUpdatingUser : false,
      isUpdatedUser : true,
      updateUserErrorReason : null
    }),
    [UPDATE_USER_FAILURE] : (state, { payload: error }) => ({
      ...state,
      isUpdatingUser : false,
      isUpdatedUser : false,
      updateUserErrorReason : error
    }),
    // 초기화
    [UPDATE_USER_INIT] : (state) => ({
      ...state,
      isUpdatingUser : false,
      isUpdatedUser : false,
      updateUserErrorReason : null
    })
  },
  initialState
);

export default updateUserReducer;
