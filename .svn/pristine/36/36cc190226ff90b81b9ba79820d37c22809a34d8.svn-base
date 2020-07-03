import React, { useEffect, useState, useCallback } from "react";
import { UpdateUser } from ".";
import { updateUserAction, UPDATE_USER_INIT } from "../actionCreators";
import { getFormValues } from "redux-form";
import { useDispatch, connect, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  SUCCESS,
  UPDATE_MEMBER_INFO_SUCCESS_MSG
} from "../../../common/constants/commonConstant";

const UpdateUserContainer = ({ values, history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const { isUpdatedUser, updateUserErrorReason } = useSelector(
    state => state.updateUserReducer
  );

  const onSubmit = e => {
    const { oldPassword, password } = values;
    dispatch(updateUserAction({ oldPassword, password }));
  };

  const onClickCancel = useCallback(
    e => {
      history.push("/");
    },
    [history]
  );

  useEffect(() => {
    if (isUpdatedUser) {
      alert(UPDATE_MEMBER_INFO_SUCCESS_MSG);
      dispatch({
        type: UPDATE_USER_INIT
      });
      history.push("/");
    }

    if (updateUserErrorReason !== null && updateUserErrorReason !== "") {
      if (SUCCESS !== updateUserErrorReason.retCode) {
        setError(`${updateUserErrorReason.userMsg}`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdatedUser, updateUserErrorReason]);

  return (
    <UpdateUser
      onSubmit={onSubmit}
      error={error}
      onClickCancel={onClickCancel}
    ></UpdateUser>
  );
};

export default connect(state => ({
  values: getFormValues("UpdateUserForm")(state)
}))(withRouter(UpdateUserContainer));
